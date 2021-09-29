const { validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var PaymentConfig = require('../config/PaymentGetwayConf');
const axios = require('axios');
const jwt_decode = require('jwt-decode');
const convertRupiah = require('rupiah-format')
const Tripay = require('../config/TripayConf');
const Ipaymu = require('../config/IpaymuConf');
/* Call Model */
const PaymentModel = require('../models/paymentUserModel');
const userModels = require('../models/userModel');
const AuthToken = require('../models/AuthTokenModel');
const SelfPay = require('../models/SelfPaymentModel');
var CryptoJS = require("crypto-js");
/* Get List Of Bank  */
const Num = require('@supercharge/numbers');
// NOTE MOMENT JS
const moment = require('moment');


/** Redirect Payment */
exports.getBankList = async (req, res) => {
  const cost = req.query.cost
  const token = req.cookies.token
  const { no_tlp } = jwt_decode(token);
  const ListOfBank = await axios.get(PaymentConfig.tripay.url_endpoint.get_list_pay, {
    headers: {
      'Authorization': 'Bearer ' + PaymentConfig.tripay.api_key
    }
  })
  const User = await userModels.findOne({
    where: {
      no_tlp: no_tlp
    }
  })
  var date = new Date();
  var getTime = parseInt(date.getSeconds())
  /* Siapkan Data Untuk generate Signature */
  const generateRef = `FACO-INV0${token.length}${getTime}_${User.id}`
  /* End Siapkan Data Untuk generate Signature */
  /* Generatate signature */
  const SignatureUser = Tripay.Signature(cost, generateRef)
  /* End Generatate signature */
  res.render('user/checkout.ejs',
    {
      title: "Top Up",
      ListBank: ListOfBank.data.data,
      cost: convertRupiah.convert(cost),
      amount: cost,
      token,
      user: User,
      refrensi: generateRef,
      signature: SignatureUser
    })

}
/* End Get List Of Bank  */

exports.instruksiPembayaran = async (req, res) => {
  const { code_bank } = req.body;
  const pay_code = PaymentConfig.tripay.pay_code;

  axios.get(PaymentConfig.tripay.url_endpoint.get_payment_insturction + `?code=${code_bank}&pay_code=${pay_code}`, {
    headers: {
      'Authorization': 'Bearer ' + PaymentConfig.tripay.api_key
    }
  }).then((result) => {
    res.json({ data: result.data.data, bankCode: code_bank, status: 200 })
  }).catch(err => {
    res.status(400).send({ message: `${err}`, status: 400 })
  })
}


/**Send TopUp Customer */
exports.sendDataCustomer = async (req, res) => {
  var { merchant_ref, type, code, token } = req.body
  var { no_tlp } = jwt_decode(token);
  console.log(no_tlp)
  var CurrentUser = await userModels.findOne({ where: { no_tlp } })
  var amount = parseInt(req.body.amount)
  var expiry = parseInt(Math.floor(new Date() / 1000) + (24 * 60 * 60));
  const SignatureUser = Tripay.Signature(amount, merchant_ref)
  var payload = {
    'method': code,
    'merchant_ref': merchant_ref,
    'amount': amount,
    'customer_name': CurrentUser.nama_user,
    'customer_email': CurrentUser.email_user,
    'customer_phone': `0${no_tlp}`,
    'order_items': [
      {
        'sku': 'REGULER_TOPUP_FACO',
        'name': 'Top Up Reguler',
        'price': amount,
        'quantity': 1
      }
    ],
    'return_url': PaymentConfig.tripay.require_url_payment.return_url,
    'expired_time': expiry,
    'signature': SignatureUser
  }

  axios.post(PaymentConfig.tripay.url_endpoint.post_payment_send, payload, {
    headers: {
      'Authorization': 'Bearer ' + PaymentConfig.tripay.api_key
    }
  }).then(results => {
    var result_payment = results.data.data;
    console.log(result_payment)
    userModels.findOne({ where: { no_tlp } }).then(userData => {
      /** Update To Data Base */
      const Payment = new PaymentModel({
        user_id: userData.id,
        token_user: token,
        topup_cost: result_payment.amount,
        merchant_ref: result_payment.merchant_ref,
        payment_method: result_payment.payment_method,
        pay_code: result_payment.pay_code,
        amount_received: result_payment.amount_received,
        total_fee: result_payment.total_fee,
        customer_name: result_payment.customer_name,
        customer_email: result_payment.customer_email,
        customer_phone: result_payment.customer_phone,
        customer_signature: SignatureUser,
        status_payment: result_payment.status
      })
      Payment.save()
        .then(results => {
          // res.redirect(result_payment.checkout_url)
          // res.render('user/paycount', {
          //   title: 'topup',
          //   data: results
          // })
          // res.json(results);
          res.writeHead(301,
            { Location: result_payment.checkout_url }
          );
          res.end();
        }).catch(err => {
          console.log(err)
          res.status(400).sand({ message: err.message, status: 400 })
        })
    }).catch(err => {
      console.log(err)
    })
  }).catch(err => {
    if (err.response.status === 400) {

      res.status(400).json(err.response.data)
    }
  })
}
/**End Send TopUp Customer */


/* url Callback */
exports.PaymentCallBack = async (req, res) => {
  var dataTopup = req.body;
  console.log(dataTopup)
  // const AdminSign = Tripay.SignatureCallback(dataTopup);
  if (dataTopup.status === "PAID") {
    await PaymentModel.update({
      status_payment: dataTopup.status,
      topup_cost: dataTopup.total_amount,
      amount_received: dataTopup.amount_received,
      total_fee: dataTopup.total_fee,
    }, {
      where: {
        merchant_ref: dataTopup.merchant_ref
      }
    })

    const pay_data = await PaymentModel.findOne({ where: { merchant_ref: dataTopup.merchant_ref } })
    const User = await userModels.findOne({ where: { id: pay_data.user_id } })
    var pendapatan_user = User.pendapatan === null ? 0 : User.pendapatan
    const sumAmount = Math.floor(parseInt(dataTopup.amount_received) + parseInt(pendapatan_user))
    console.log(sumAmount)

    await userModels.update({
      pendapatan: sumAmount,
    }, {
      where: {
        id: pay_data.user_id
      }
    }).then(results => {
      console.log('ok')
      res.status(200).send({ message: 'Aggrement Send', callbackData: dataTopup, status: 200 })
    }).catch(err => {
      console.log(err)
      res.status(403).send({ message: err })
    })

  } else if (dataTopup.status === 'EXPIRED') {
    await PaymentModel.update({
      status_payment: dataTopup.status,
      topup_cost: dataTopup.total_amount,
      amount_received: dataTopup.amount_received,
      total_fee: dataTopup.total_fee,
    }, {
      where: {
        merchant_ref: dataTopup.merchant_ref
      }
    }).then(result => {
      res.status(200).send({ message: 'Top up Telah Expired', callbackData: dataTopup })
    }).catch(err => {
      res.status(500).send({ message: `Top up Telah Expired ${err}`, callbackData: dataTopup })
    })
  } else if (dataTopup.status === 'FAILED') {
    await PaymentModel.update({
      status_payment: dataTopup.status,
      topup_cost: dataTopup.total_amount,
      amount_received: dataTopup.amount_received,
      total_fee: dataTopup.total_fee,
    }, {
      where: {
        merchant_ref: dataTopup.merchant_ref
      }
    }).then(result => {
      res.status(200).send({ message: 'Gagal Topup', callbackData: dataTopup })
    }).catch(err => {
      res.status(500).send({ message: `Gagal Topup Dengan Error${err}`, callbackData: dataTopup })
    })
  }
}
/* End url Callback */


//============================ IPAYMU CONTROLLER ===============================

exports.CheckoutIpaymu = async (req, res) => {
  const { cost } = req.query
  const account = PaymentConfig.ipaymu.virtua_account
  const token = req.cookies.token
  const payload = jwt_decode(token);
  const RandomNum = Num.randomIntBetween(10, 99999)
  const PaymentPayload = {
    account: account,
    product: [`amazoncuan_topup${RandomNum}`],
    qty: [1],
    price: [cost],
    returnUrl: PaymentConfig.ipaymu.returnUrl,
    cancelUrl: PaymentConfig.ipaymu.cancelUrl,
    notifyUrl: PaymentConfig.ipaymu.notifyUrl
  }
  var Signature = Ipaymu.GenerateSignature(PaymentPayload);

  await axios.post(`${PaymentConfig.ipaymu.mode.sandbox}/api/v2/payment`,
    JSON.stringify(PaymentPayload)
    , {
      headers: {
        Accept: 'application/json', 'Content-Type': 'application/json',
        va: `${PaymentConfig.ipaymu.virtua_account}`,
        signature: Signature,
        timestamp: '20150201121045'
      }
    }).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      console.log(err)
      if (err) {
        res.status(400).json(err)
      }
    })
}


//===========================================================================//
//=============================== Self Payment ==============================//
//============================================================================//
/* View Self Topup */
exports.CheckOutSelfPayment = async (req, res) => {
  const { code_bank, noRek, img_path, amount } = req.query
  const token = req.cookies.token
  const { no_tlp } = jwt_decode(token)
  const User = await userModels.findOne({ where: { no_tlp } })
  const RandomNum = Num.randomIntBetween(10, 99999)
  if (User) {
    const PreparePayed = new SelfPay({
      code_topup: RandomNum,
      code_self_pay: code_bank,
      no_rek: User.rekening,
      nomor_tlp_pelanggan: User.no_tlp,
      email_pelanggan: User.email_user,
      nama_pelanggan: User.nama_user,
      nama_bank: User.namabank,
      kode_member: User.kode_akun,
      userId: User.id,
      status_self_pay: 'PENDING',
      total_topup_self: amount
    })

    PreparePayed.save();

    res.render('user/paycount',
      {
        title: "Self Pay",
        code_bank,
        noRek,
        img_path,
        user_data: User,
        amount,
        rupiah: convertRupiah.convert(amount)
      })

  }
}
/* End View Self Topup */

// TODO COUNTDOWN TIMER
exports.CountDown = async (req, res) => {
  // NOTE CREATE COUNTDOWN TIME
  const token = req.cookies.token
  const { no_tlp } = jwt_decode(token)
  const User = await userModels.findOne({ where: { no_tlp } })
  const Payment = SelfPay.findOne({ where: { user_id: User.id } })
  var days = moment().add(1, 'day');
  var PaymentDay = moment(Payment.created_at)
  var diffDate = days - PaymentDay
  var duration = moment.duration(diffDate * 1000, 'milliseconds');
  var interval = 1000;
  duration = moment.duration(duration - interval, 'milliseconds');
  res.status(200).send({ menit: duration.minutes(), jam: duration.hours(), detik: duration.seconds() })
}

/* callback to */
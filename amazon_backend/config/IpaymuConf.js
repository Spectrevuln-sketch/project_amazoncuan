var CryptoJS = require("crypto-js");
var userModels = require("../models/userModel");
var PaymentConfig = require('./PaymentGetwayConf');
var axios = require('axios');
/** Generate Signature */
exports.GenerateSignature = async (payloadPay) => {
    const User = await userModels.findOne({ where: { no_tlp: payload.no_tlp } })

    // const PayloadPayment = {
    //     name: User.nama_user,
    //     email: User.email_user,
    //     phone: `0${User.no_tlp}`,
    //     amount: amount,
    //     notifyUrl: PaymentConfig.ipaymu.notifyUrl,
    //     // paymentMethod: methodPay,
    //     // paymentChannel: channel
    // }
    var bodyEncrypt = CryptoJS.SHA256(JSON.stringify(payloadPay));
    var stringtosign = "POST:" + va + ":" + bodyEncrypt + ":" + apikey;
    var signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringtosign, PaymentConfig.ipaymu.api_key));
    return signature
}
  /** End Generate Signature */
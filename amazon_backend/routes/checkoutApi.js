var express = require('express');
var router = express.Router();
const PaymentController = require('../controllers/PaymentController');
var corsConfig = require('../config/corsConf');
var cors = require('cors')
var Validate = require('../config/validation');
//============================ Request API For User ===============================
/* get All list of bank */
router.post('/TopUp', cors(corsConfig.option), PaymentController.sendDataCustomer);
/* End get All list of bank */
/* view Checkout */
router.get('/paymentCheckOut', cors(corsConfig.option), PaymentController.getBankList);
/* End view Checkout */
/* instruksi Pembayaran */
router.post('/instruksiPembayaran', cors(corsConfig.option), PaymentController.instruksiPembayaran);
/* instruksi Pembayaran */
/* Callback Tripay Endpoint */
router.post(process.env.TRIPAY_CALLBACK_URL, cors(corsConfig.option), PaymentController.PaymentCallBack)
/* End Callback Tripay Endpoint */
router.get('/checkoutIpaymu', cors(corsConfig.option), PaymentController.CheckoutIpaymu)


/** Cheack Out Self Payment Data */
router.get('/self-payment', cors(corsConfig.option), PaymentController.CheckOutSelfPayment)
/** End Cheack Out Self Payment Data */
// NOTE COUNTDOWN TIMER
router.get('/count-down', cors(corsConfig.option), PaymentController.CountDown)



module.exports = router;
/* .ENV Settings */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PaymentGetway = {
  tripay: {
    api_key: process.env.TRIPAY_KEY || 'DEV-IBGCFlEReuYRUBOkUK7RV52F9MUy6iv9aqO6Bs52',
    pay_code: process.env.CODE_VA,
    signature: {
      private_key: process.env.TRIPAY_PRIVATE_KEY || 'LydAD-QVeVH-umObE-oWCF1-YGJGI',
      kode_merchant: process.env.TRIPAY_KODE_MERCHANT || 'T5382',

    },
    url_endpoint: {
      get_list_pay: process.env.TRIPAY_DATA_BANK || 'https://tripay.co.id/api-sandbox/merchant/payment-channel',
      get_payment_insturction: process.env.TRIPAY_INSTRUKSI_PEMBAYARAN || 'https://tripay.co.id/api-sandbox/payment/instruction',
      post_payment_send: process.env.TRIPAY_SEND_PAYMENT || 'https://tripay.co.id/api-sandbox/transaction/create',

    },
    require_url_payment: {
      callback_url: '',
      return_url: process.env.TRIPAY_REDIRECTED || 'http://localhost:5123/dompetKu'
    }

  },
  ipaymu: {
    api_key: '6647E3BF-D239-4364-9670-ACA4B62907B9',
    virtua_account: '1179002328535943',
    notifyUrl: process.env.NOTIFY_URL || 'http://localhost:5110/checkout-payment/',
    returnUrl: process.env.RETURN_URL,
    cancelUrl: process.env.CANCEL_URL,
    mode: {
      sandbox: process.env.IPAYMU_MODE_PRODUCTION || 'https://sandbox.ipaymu.com/',
      production: 'https://my.ipaymu.com'
    },
  }
}

module.exports = PaymentGetway;

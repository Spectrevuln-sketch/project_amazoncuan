var express = require('express');
var router = express.Router();

// test model
var Affiliate = require('../models/AfiliateModel');
var User = require('../models/userModel');
var json_decode = require('jwt-decode');
const userModels = require('../models/userModel');
const affiliasiModels = require('../models/AfiliateModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'E xpress' });
});

/* GET home page. */
router.get('/users', function (req, res, next) {
  affiliasiModels.findAll({}).then(result => {
    res.json(result);
  });
});


/** test Affiliate */
router.get('/affiliate', async (req, res) => {
  let Master = await User.findOne({ where: { kode_akun: '7X8CG7zsQp' } })

  let data = await Affiliate.findAll({
    include: [{
      model: User
    }],
    where: {
      master_kode_akun: Master.kode_akun
    }
  })
  const Aff = data.map(result => {
    return Object.assign(
      {},
      {
        phone_number: result.no_tlp,
        data_user: result.userId.map(data => {
          return Object.assign(
            {},
            {
              user_data_id: data.id

            }
          )
        })
      }
    )
    console.log(Aff)
    res.json(Aff);
    console.log(Master)
  })
})




module.exports = router;

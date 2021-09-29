const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const User = require('./userModel');

var SelfPayment = MysqlDB.define('self_payment_method', {
  code_topup: {
    type: Sequelize.STRING
  },
  code_self_pay: {
    type: Sequelize.STRING
  },
  no_rek: {
    type: Sequelize.STRING
  },
  image_channel: {
    type: Sequelize.STRING
  },
  nomor_tlp_pelanggan: {
    type: Sequelize.STRING
  },
  kode_member: {
    type: Sequelize.STRING
  },
  rekening_bank: {
    type: Sequelize.STRING
  },
  nama_pelanggan: {
    type: Sequelize.STRING
  },
  email_pelanggan: {
    type: Sequelize.STRING
  },
  nama_bank: {
    type: Sequelize.STRING
  },
  total_topup_self: {
    type: Sequelize.STRING
  },
  status_self_pay: {
    type: Sequelize.STRING
  },

  updatedAt: {
    type: Sequelize.DATE
  },
  createdAt: {
    type: Sequelize.DATE
  }
},
  {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    allowNull: true
  }
)
User.hasMany(SelfPayment)
SelfPayment.belongsTo(User)

module.exports = SelfPayment;
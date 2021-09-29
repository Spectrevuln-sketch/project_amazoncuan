const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const User = require('./userModel')
const UserPay = require('./paymentUserModel');
var affiliasiModels = MysqlDB.define('affiliate_user', {
  master_kode_akun: {
    type: Sequelize.STRING
  },
  reward_ajak: {
    type: Sequelize.STRING
  },
  guest_kode: {
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
affiliasiModels.belongsTo(User)
User.hasMany(affiliasiModels)

module.exports = affiliasiModels;
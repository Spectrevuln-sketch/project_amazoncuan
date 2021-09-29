const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const Payment = require('./paymentUserModel');
const User = require('./userModel');
const SelfPayment = require('./SelfPaymentModel');
var HistoryPay = MysqlDB.define('history_payment', {

  type_payment: {
    type: Sequelize.INTEGER
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

Payment.belongsToMany(User, { through: HistoryPay })
User.belongsToMany(Payment, { through: HistoryPay })
SelfPayment.belongsToMany(User, { through: HistoryPay })
User.belongsToMany(SelfPayment, { through: HistoryPay })

module.exports = HistoryPay;
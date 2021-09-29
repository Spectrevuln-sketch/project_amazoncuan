const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const User = require('./userModel');

var PenarikanDana = MysqlDB.define('request_penarikan', {
  user_id: {
    type: Sequelize.INTEGER
  },
  jumlah_penarikan: {
    type: Sequelize.INTEGER
  },
  status_transaksi: {
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
User.hasOne(PenarikanDana);
PenarikanDana.belongsTo(User);

module.exports = PenarikanDana;
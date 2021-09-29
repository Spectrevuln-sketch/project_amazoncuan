const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
var VipModel = MysqlDB.define('vip_list', {
  vip_name: {
    type: Sequelize.STRING
  },
  tugas_per_hari: {
    type: Sequelize.INTEGER
  },
  per_pesanan: {
    type: Sequelize.INTEGER
  },

  per_bulan: {
    type: Sequelize.INTEGER
  },
  per_hari: {
    type: Sequelize.INTEGER
  },
  per_tahun: {
    type: Sequelize.INTEGER
  },
  harga_vip: {
    type: Sequelize.INTEGER
  },
  color_block: {
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


module.exports = VipModel;
const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
var DaftarVendorTugasModel = MysqlDB.define('daftar_tugas', {
  title_kategori: {
    type: Sequelize.STRING
  },
  image_ketegori: {
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


module.exports = DaftarVendorTugasModel;
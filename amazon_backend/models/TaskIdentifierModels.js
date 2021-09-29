const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const TaskUser = require('./myTaskModel')
const Vendor = require('./DaftarVendorTugasModel');
const Vip = require('./VipModel');
var TaskIdentifier = MysqlDB.define('task_identifier', {
  task_id: {
    type: Sequelize.STRING
  },
  kategori_tugas: {
    type: Sequelize.INTEGER
  },
  link_tugas: {
    type: Sequelize.STRING
  },
  unique_code: {
    type: Sequelize.INTEGER
  },
  no_tlp_pedagang: {
    type: Sequelize.STRING
  },
  cost_task: {
    type: Sequelize.INTEGER
  },
  judul_tugas: {
    type: Sequelize.INTEGER
  },
  deskripsi_tugas: {
    type: Sequelize.STRING
  },
  misi_tugas: {
    type: Sequelize.STRING
  },
  image_tugas: {
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
TaskUser.hasOne(TaskIdentifier);
TaskIdentifier.belongsTo(TaskUser);
TaskIdentifier.belongsTo(Vendor);
TaskIdentifier.belongsTo(Vip);

module.exports = TaskIdentifier;
const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const Admin = require('./AdminModel');
var AdminTeamModel = MysqlDB.define('admin_team', {
  master_admin_kode: {
    type: Sequelize.STRING
  },
  team_admin_kode: {
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


module.exports = AdminTeamModel;
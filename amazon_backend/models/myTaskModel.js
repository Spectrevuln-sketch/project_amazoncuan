const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const User = require('./userModel');
const TaskModel = require('./taskModel');


var MyTaskModel = MysqlDB.define('user_task_data', {
  user_id: {
    type: Sequelize.INTEGER
  },
  unique_code: {
    type: Sequelize.INTEGER
  },
  no_tlp_pedagang_tugas: {
    type: Sequelize.INTEGER
  },
  member: {
    type: Sequelize.STRING
  },
  cost_task: {
    type: Sequelize.INTEGER
  },
  url_task: {
    type: Sequelize.STRING
  },
  image_file: {
    type: Sequelize.STRING
  },
  task_status: {
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
User.hasMany(MyTaskModel);
MyTaskModel.belongsTo(User);


module.exports = MyTaskModel;
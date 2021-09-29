const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const User = require('./userModel')
var AuthToken = MysqlDB.define('auth_token', {
  user_id: {
    type: Sequelize.STRING
  },
  token: {
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
User.hasOne(AuthToken);
AuthToken.belongsTo(User);

module.exports = AuthToken;
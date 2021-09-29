const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
const Payment = require('./paymentUserModel');
const User = require('./userModel');
const SelfPayment = require('./SelfPaymentModel');
var UangTeam = MysqlDB.define('team_cost', {

    total_uang: {
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

Payment.belongsToMany(User, { through: UangTeam })
User.belongsToMany(Payment, { through: UangTeam })
SelfPayment.belongsToMany(User, { through: UangTeam })
User.belongsToMany(SelfPayment, { through: UangTeam })

module.exports = UangTeam;
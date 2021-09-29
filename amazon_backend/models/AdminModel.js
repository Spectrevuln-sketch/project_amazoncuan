const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');
var AdminModel = MysqlDB.define('admins', {
    admin_email: {
        type: Sequelize.STRING
    },
    admin_name: {
        type: Sequelize.STRING
    },
    admin_kode: {
        type: Sequelize.STRING
    },
    password: {
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


module.exports = AdminModel;
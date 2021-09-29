/* Model */
const sequelize = require('./mysql');
const Team = require('../models/AdminTeamModel');
const Admin = require('../models/AdminModel');

/* Function */
exports.JoinTwoTableFind = async (first_table, second_table, col_condition, same_with) => {
  const FindTeam = await sequelize.query("SELECT * FROM " + first_table + " LEFT JOIN " + second_table + " WHERE " + col_condition + " = " + same_with + "", { type: sequelize.QueryTypes.SELECT });
  return FindTeam
}



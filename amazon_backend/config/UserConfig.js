var UserData = require('../models/userModel');
const jwt_decode = require('jwt-decode');

exports.CurrentUser = async (token) => {
  const payload = jwt_decode(token);
  var User = await UserData.findOne({ where: { no_tlp: payload.no_tlp } })
  return User;
}
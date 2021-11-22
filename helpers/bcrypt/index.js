const bcrypt = require('bcryptjs');

let hashPass = (userPass) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(userPass, salt);
  return hash;
};

let compPass = (userPass, dbPass) => bcrypt.compareSync(userPass, dbPass);

module.exports = { hashPass, compPass };

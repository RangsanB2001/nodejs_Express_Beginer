function showadminCount() {
  let sql = "SELECT * FROM admin";
  return sql;
}
function check_login() {
  var sql = "SELECT * FROM admin WHERE username_admin=:username";
  return sql;
}
module.exports{
    showadminCount,
    check_login
}

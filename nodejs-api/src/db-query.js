const mysql = require("mysql2");
const { promisify } = require("util");
const { mysql: settings } = require("./settings");

const { user, password, database, host } = settings;

const pool = mysql.createPool({
  user,
  password,
  database,
  host,
});

const queryAsync = promisify(pool.query.bind(pool));

module.exports = { pool, queryAsync };

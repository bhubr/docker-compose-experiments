const mysqlSettings = {
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "database",
  host: process.env.DB_HOST || "host",
};

const port = 8000;

module.exports = {
  port,
  mysql: mysqlSettings,
};

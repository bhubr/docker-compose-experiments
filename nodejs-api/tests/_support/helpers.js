const { pool, queryAsync } = require("../../src/db-query");

const truncateTasks = async () => queryAsync("TRUNCATE task");

const shutdownDb = () => pool.end();

module.exports = { truncateTasks, shutdownDb };

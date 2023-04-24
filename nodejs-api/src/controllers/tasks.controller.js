const { queryAsync } = require("../db-query");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await queryAsync("SELECT * FROM task");
    return res.send(tasks);
  } catch (err) {
    return res.status(500).send({
      error: err.message,
    });
  }
};

const postTask = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).send({
      error: "Missing required field `title`",
    });
  }
  try {
    const { insertId } = await queryAsync("INSERT INTO task SET ?", { title });
    const [task] = await queryAsync(
      "SELECT * FROM task WHERE id = ?",
      insertId
    );
    return res.send(task);
  } catch (err) {
    return res.status(500).send({
      error: err.message,
    });
  }
};

module.exports = {
  getAllTasks,
  postTask,
};

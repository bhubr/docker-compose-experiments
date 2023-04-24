const express = require("express");

const tasksRouter = require("./tasks.router.js");

const apiRouter = express.Router();

apiRouter.use("/tasks", tasksRouter);

module.exports = apiRouter;

const express = require("express");

const tasksRouter = express.Router();

const tasksController = require("../controllers/tasks.controller");

tasksRouter.get("/", tasksController.getAllTasks);

tasksRouter.post("/", tasksController.postTask);

module.exports = tasksRouter;

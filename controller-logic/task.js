const Task = require("../models/task");

const getalltask = (req, res) => {
  res.send("get all task");
};
const createtask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const gettask = (req, res) => {
  res.send("get single task");
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete the task");
};

module.exports = { getalltask, createtask, gettask, updateTask, deleteTask };

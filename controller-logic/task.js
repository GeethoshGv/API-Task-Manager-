const getalltask = (req, res) => {
  res.send("get all task");
};
const createtask = (req, res) => {
  res.json(req.body);
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

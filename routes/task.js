const express = require("express");

const {
  getalltask,
  createtask,
  gettask,
  updateTask,
  deleteTask,
} = require("../controller-logic/task");

const router = express.Router();

router.route("/").get(getalltask).post(createtask);

router.route("/:id").get(gettask).patch(updateTask).delete(deleteTask);

module.exports = router;

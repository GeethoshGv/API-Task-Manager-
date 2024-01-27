const express = require("express");

const app = express();

const tasks = require("./routes/task");

const connectDB = require("./DB/connect");

require("dotenv").config();
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

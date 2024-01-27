const express = require("express");
const app = express();
const routes = require("./routes/task");
const connectDB = require("./DB/connect");

require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/api/task", routes);

port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening in ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

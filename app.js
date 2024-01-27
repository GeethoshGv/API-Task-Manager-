const express = require("express");
const app = express();
const routes = require("./routes/task");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/api/task", routes);

port = 5000;
app.listen(port, console.log(`server is listening in ${port}`));

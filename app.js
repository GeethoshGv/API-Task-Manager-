const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

port = 5000;
app.listen(port, console.log(`server is listening in ${port}`));

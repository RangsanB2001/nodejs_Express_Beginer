const express = require("express");
// const chalk = require("chalk")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Pond");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

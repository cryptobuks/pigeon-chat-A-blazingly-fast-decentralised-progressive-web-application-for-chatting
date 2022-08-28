const express = require("express");
const Gun = require("gun"); //initialize gun on server
const app = express();

app.use(Gun.serve);

const server = app.listen(6000, () => {
  console.log("Server running on ....", 6000);
});

Gun({ web: server });

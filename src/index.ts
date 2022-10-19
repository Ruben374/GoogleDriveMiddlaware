import express from "express";
const Error = require("./interfaces");
const app = express();
require("dotenv").config({ path: __dirname + "./../.env" });
const testRoute= require("./routes/mainroute")

app.use("/test",testRoute)

app.use((req, res, next) => {
  //error 404
  const error = new Error("Page not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message:error.message,
      status:error.status
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log("GoogleDriveMiedlaware is online!");
});

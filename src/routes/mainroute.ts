import express from "express";
const router = express();
const maincontroller = require("../controllers/maincontroller");

router.get("/", maincontroller.get);

module.exports = router;

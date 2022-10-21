import express from "express";
const router = express();
const multer=require("../config/multer")
const maincontroller = require("../controllers/maincontroller");
router.get("/", maincontroller.get);
router.post("/upload",multer.single("file"),maincontroller.post);
module.exports = router;

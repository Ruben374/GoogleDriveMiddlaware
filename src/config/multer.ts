const multer = require("multer");
import crypto from "crypto";
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //definindo para onde o arquivo sera armazenado de forma temporaria
    const balayAudPath = "tmp/uploads";
    fs.mkdirSync(balayAudPath, { recursive: true }); //cria o diretorio caso não exista
    cb(null,balayAudPath); //este directorio tem de ser ja criado
  },
  filename: (req, file, cb) => {
    //definindo o nome do ficheiro
    console.log(file);
    cb(null, file.originalname);
  },
});

const fileFilter = (req, res, file) => {};

const upload = multer({ storage: storage });

module.exports = upload;

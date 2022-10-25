import { rmSync } from "fs";
import * as path from "path";
import * as fs from "fs";
const { google } = require("googleapis");

exports.get = (req, res) => {
  res.send("Ola mundo");
};

exports.post = async (req, res) => {
 try{
  console.log("estou na rota")
  const auth=new google.auth.GoogleAuth({
    keyFile:'./drive.json',
    scopes:['https://www.googleapis.com/auth/drive']
  })

  const driveService=google.drive({
    version:'v3',
    auth
  })
  const fileMetadata={
    'name':'c.jpg',
    'parents':[process.env.GOOGLE_DRIVE_FOLDER_ID]
  }
  const media={
    mimeType:'image/jpg',
    body:fs.createReadStream('./c.jpg')
  }
  const response = await driveService.files.create({
    resource:fileMetadata,
    media:media,
    fields:'id'
  })
  console.log(response)
  return res.send("ola mundo tudo bem")
 }
 catch(error){
  console.log(error.message)
 }
   };

// const express = require("express")
// const multer = require("multer")
// const path = require("path")

// const FirstController = require("../Controllers/FirstController");
// const route = express.Router();
// route.get("/get-data", FirstController.x);

//creating storage/multer class
// const Storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"UPLOADS")
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })

//file filters
// const fileFilters=(req,file,cb)=>{
//     const AllowedTypes = /png|jpg|jpeg|svg/
//     const extension = path.extname(file.originalname).toLowerCase()
//     if(AllowedTypes.test(extension)){
//         //resolve
//         cb(null,true);
//     }
//     else{
//         cb(new Error("Not Valid Format"))
//     }
// }

//mixing of storage and filters
// const UPLOADS = multer({
//     storage: Storage,
//     fileFilter : fileFilters,
//     limits:{
//         fileSize:1024*1024*2
//     }
// })

// route.post("/file-upload",UPLOADS.single('file'),FirstController.UploadFile)


//route for password encryption
// route.post("/encrypt-password",FirstController.EncryptPassword);

//route for user registration
// route.post("/register",FirstController.Register);

//route for user login
// route.post("/login",FirstController.Login);



const express = require("express")
const multer=require('multer')
const  path=require('path')
const FirstController = require("../Controllers/FirstController");
const route = express.Router();
//creating storage class(multer)
const Storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
   filename:function(req,file,cd){
    cb(null,file.originalname)
   }
})
//File Filters
const FileFilters=(req,file,cb)=>{
    const AllowedTypes=/png|jpg|jpeg|svg/
    const extension=path.extname(file.originalname).toLowerCase()
    if(AllowedTypes.test(extension))
    {
        //resolve
        cb(null,true);
    }
    else{
        cb(new Error("Not valid Format"))
    }
}
//Mixing of storage class and FileFilters
const Upload = multer({
    storage:Storage,
    fileFilter : FileFilters,
    limits:{
        fileSize:1024*1024*2
    }
})

route.post("/file-upload",Upload.single('file'),FirstController.UploadFile)

route.get("/get-data", FirstController.x);

//encryption route
route.post("/encrypt-token",FirstController.encryption)

//verify encryption
route.post("/verify-encrypt",FirstController.verification)
module.exports = route;


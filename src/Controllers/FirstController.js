// const express = require("express")
// const Credentials = require("../Models/Credentials.js")
// const Bcrypt = require("bcrypt")


// const TestingAPI = (req,res) =>{
//     console.log("Responding....");
// }
// exports.x = TestingAPI;


//Controller Code for File Upload
// const UploadFile = async(req,res) => {
//     try{
//         console.log(req.file)
//         return res.status(200).json(req.file)
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json(err)
//     }
// }

//controller code for password encryption
// const EncryptPassword = async(req,res) => {
//     try{
//         const encode = await Bcrypt.hash(req.body.password,10);
//         return res.status(200).json(encode)
//     }   
//     catch(err){
//         console.log(err)
//         return res.status(500).json(err)
//     }
// }


const express = require("express")
    const Credentials = require("../Models/Credentials.js")
    const Bcrypt = require('bcrypt')
    const TestingAPI = (req,res) =>{
        console.log("Responding....");
    }
    const UploadFile = async(req,res) => {
        try{
            if(!req.file){
                return res.status(400).json({message: "No file uploaded"})
            }
            console.log(req.file)
            return res.status(200).json({
                message: "File uploaded successfully",
                file: req.file
            })
        }
        catch(err){
            console.log(err)
            return res.status(500).json(err)
        }
    }

    const encryption = async(req,res) => {
    try{
        const encode = await Bcrypt.hash(req.body.password,10);
        return res.status(200).json(encode);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error: err.message})
    }
    }
    const verification=async(req,res)=>{
        try{
            const encrypted="$2b$10$4IR3K1SHQfCsNDx4IEW/6.Cez0RKvsTMSPyHwX0An/GI62F43DbX2"; 
           const isValid= await Bcrypt.compare(req.body.password,encrypted);
            return res.status(200).json(isValid);
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error: err.message})
        }
    }


    exports.x = TestingAPI;
    exports.UploadFile=UploadFile;
    exports.encryption=encryption;
    exports.verification=verification;


    
const mongoose = require('mongoose')

const data = mongoose.Schema({
    username:{
        type : String,
        required : true,
        trim : true
    },
    password:{
        type : String,
        required : true,
        trim : true
    }
})

module.exports = mongoose.model("Credentials", data)
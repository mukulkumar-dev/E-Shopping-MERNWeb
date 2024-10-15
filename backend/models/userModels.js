

const mongoose = require('mongoose')

const userSchema = new userSchema({
    name:String,
    email: {
        type:String,
        unique: true,
        required : true,
    },
    password: String,
    profilePic: String,
},{
    timeStamps: true,
})

const userModels = mongoose.model("User :",userSchema)

module.export = userModels
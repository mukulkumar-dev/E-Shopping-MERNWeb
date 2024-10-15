
const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB.URI)
    }catch(err){
        console.log("Error")
    }
}

module.exports = connectDB
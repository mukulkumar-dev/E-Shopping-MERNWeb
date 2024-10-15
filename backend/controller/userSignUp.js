const userModels = require('../models/userModels')

async function userSignUp(req, res){
    try{
        const{email, password, name}= req.body

        if(!email){
            throw new Error("Provide me correct EmailID")
        }
        if(!password){
            throw new Error("Provide me correct Password")
        }
        if(!name){
            throw new Error("Provide me correct Name")
        }

        const userData = new userModels(req.body)

    }catch(err){
        res.json({
            message: errored,
            error : true,
            message:false,
        })
    }
}
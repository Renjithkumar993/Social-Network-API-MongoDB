

const {User} = require("../models")


module.exports = {

    async createUser (req,res) {
    
        try {
            const newUser = await User.create(req.body)
            res.json(newUser);
        }catch(err){
             res.status(500).json(err);
        }
    },
    async getAllUsers (req,res){
        try {
            const getAllUserData = await User.find()
            res.json(getAllUserData)
        }catch(err){
            res.status(500).json(err)
        }
    }
}
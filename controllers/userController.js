

const {User} = require("../models")


module.exports = {

    async createUser (req,res) {
        console.log("i am here")
        try {
            const newUser = await User.create(req.body)
            res.json(newUser);
        }catch(err){
             res.status(500).json(err);
        }
    }
}
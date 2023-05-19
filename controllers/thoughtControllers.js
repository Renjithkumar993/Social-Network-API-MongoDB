const {Thought,User} = require("../models")



module.exports = {

    async createThought (req,res){
        try{
        const newThought = await Thought.create(req.body)
        const userThought = await User.findOneAndUpdate(
            { _id : "6466ba7a94f1152a17313461"},
            {$addToSet : { thoughts : newThought._id}},
            {new : true}
        )
        res.json(userThought)
        }catch(err){
            res.status(500).json(err)
        }
    },


async getAllThought (req,res){
    try {
        const getAllThoughtData = await Thought.find()
        res.json(getAllThoughtData)
    }catch(err){
        res.status(500).json(err)
    }
}





}

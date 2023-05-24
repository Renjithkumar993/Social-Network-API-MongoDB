const { response } = require("express")
const {Thought,User,reactionSchema} = require("../models")



module.exports = {

    async createThought (req,res){
        try{
        const newThought = await Thought.create(req.body)
        const userThought = await User.findOneAndUpdate(
            { _id : req.body.id},
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
},

async getsingleThought(req,res){
    try{
        const getsingleData =  await Thought.findOne({_id : req.params.id})
        res.json(getsingleData)
    
    }catch(err){
    res.status(404).json(err)
    }
},
async delThought(req,res){
    try{
        const thoughts = await Thought.findOneAndRemove({_id: req.params.id})
        const user = await User.findOneAndUpdate(
            { _id : req.body.id},
            {$pull : { thoughts : thoughts._id}},
            {new : true}
        )
        res.json(user)
    }catch(err){
        res.status(404).json(err)
    }
},
async addReaction (req,res){
    try {
        const thoughts = await Thought.findOneAndUpdate({_id: req.params.thoughtId},{$addToSet : { reactions : req.body} }, { runValidators: true, new: true })
        if (!thoughts) {
            return res.status(404).json({ message: 'No thought with that ID' });
        }

         res.json(thoughts)
    }catch(err){
        res.json(err)
    }
},
async delReaction (req,res){
    try {
        const thoughts = await Thought.findOneAndUpdate({_id: req.params.thoughtId},{$pull : { reactions : {reactionId : req.params.reactionId}} }, { runValidators: true, new: true })
         res.json(thoughts)
    }catch(err){
        res.json(err)
    }
},


}

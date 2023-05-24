

const {User,Thought} = require("../models")


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
    },

    
      async getsingleUser(req,res){
    try {
        const user = await User.findOne({_id : req.params.userId});
        if(!user){
            return res.status(404).json({message : "no user with that ID"})
        }
        res.json(user)
    }catch(err){
        res.status(500).json(err)
    }
    
    
    },

    async updateUser(req,res){
        try{
            const editUser = await User.findOneAndUpdate({_id : req.params.userId},{$set : req.body},{runValidators : true, new : true});
            res.json(editUser)
        }catch(err){
            res.status(404).json(err)
        }
    },
    async deleteUser(req,res){
        try {
            const delUser =  await User.findOneAndRemove({_id : req.params.userId});

            if(!delUser){
                res.status(404).json({message : "NO user with this id "})
            }
            
          res.json({message:"deleted user"})
        }catch(err){
            res.status(500).json(err)
        }
    },

    async addFriend(req,res){
        try{
            const addFriendData = await User.findOneAndUpdate({_id : req.params.userId},{$addToSet : { friends : req.params.friendId}},{ runValidators: true, new: true })
            res.json(addFriendData)
        }catch(err){
            res.status(404).json(err)
        }
    },

    async delFriend(req,res){
        try{
            const friendToDel = await User.findOneAndUpdate({_id : req.params.userId},{$pull : { friends : req.params.friendId}},{ runValidators: true, new: true })
            res.json(friendToDel)
        }catch(err){
            res.status(404).json(err)
        }

    }



    
}
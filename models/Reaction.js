const {Schema, default: mongoose} =  require ("mongoose") 


const reactionSchema =  new Schema ({
    reactionId : {
        type : mongoose.Types.ObjectId,
        default : new mongoose.Types.ObjectId()
    },
    reactionBody : {
        type : String,
        required : true,
        maxlength : 280,
    },
    username : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
},
{
    toJSON:{
        getters:true,
    },
    id:false
}
)

reactionSchema.methods.formatTime = function formatTime () {
    let date  =  this.createdAt
    return date.toDateString()
    }





module.exports = reactionSchema
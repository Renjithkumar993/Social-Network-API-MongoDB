const {Schema, Types ,mongoose} =  require ("mongoose") 


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
reactionSchema.virtual("createdTime").get(function() {
    return dateFormat('yyyy-MM-dd hh:mm:ss', this.createdAt);
})



module.exports = reactionSchema
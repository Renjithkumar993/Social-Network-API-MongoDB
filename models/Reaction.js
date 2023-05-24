const { Schema, Types } = require('mongoose');
const dateFormat = require('date-format');
const reactionSchema =  new Schema ({
    reactionId : {
        type : Schema.Types.ObjectId,
        default : new Types.ObjectId()
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
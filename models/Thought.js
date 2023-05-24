const {Schema, Types , model} =  require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require('date-format');

const thoughtSchema = new Schema({
    thoughtText : {
        type : String,
        required  : true,
        minlength : 1,
        maxlength : 280
    },

    createdAt :{
        type : Date,
        default : Date.now,

    
    },
    username : {
        type : String,
        required : true,
    },

    reactions : [reactionSchema]


},
{
    toJSON : {
        virtuals : true,
    },
    id : false
}
)


thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length 
})
thoughtSchema.virtual("createdTime").get(function() {
    return dateFormat('yyyy-MM-dd hh:mm:ss', this.createdAt);
})

const Thought = model("Thought",thoughtSchema)



module.exports = Thought
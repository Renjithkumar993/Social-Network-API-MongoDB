const {Schema, Types , model} =  require("mongoose");
const reactionSchema = require("./Reaction");

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
        get : (createdAt) => createdAt + "hi"
    
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



thoughtSchema.methods.formatTime = function () {
    let date  =  this.createdAt
    return date.toDateString()
    }



thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length ,
})


const Thought = model("Thought",thoughtSchema)



module.exports = Thought
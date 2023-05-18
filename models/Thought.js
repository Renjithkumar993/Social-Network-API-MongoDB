const {Schema, Types , model} =  require("mongoose");
const { Reaction } = require("./Reaction");

const thoughtSchema = new Schema({
    thoughtText : {
        type : String,
        required  : true,
        min : 1,
        max : 280
    },

    createdAt :{
        type : Date,
        default : Date.now,
    },
    username : {
        type : String,
        required : true,
    },
    reactions : [Reaction]


},
{
    toJSON : {
        virtuals : true,
    },
    id : false
}
)



thoughtSchema.methods.formatTime = function formatTime () {
    let date  =  this.createdAt
    return date.toDateString()
    }



thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length
})


const Thought = model("Thought",thoughtSchema)



module.exports = Thought
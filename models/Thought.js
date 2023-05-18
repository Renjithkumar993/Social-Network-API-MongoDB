const {Schema, Types} =  require("mongoose");

const thoughtSchema = new Schema({
    thoughtText : {
        type : String,
        required  : true,
        min : 1,
        max : 280
    },

    createdAt :{
        type : Date,
        default : Date.now
    },
    username : {
        type : String,
        required : true,
    },
    reactions : [reactionSchema]


})



function formatTime (date) {
return date.toDateString()
}

thoughtSchema.virtual("reactionCount")

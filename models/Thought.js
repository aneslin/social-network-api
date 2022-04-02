const { Schema, model } = require("mongoose");


const ThoughtSchema = new Schema(
    thoughtText:{
        type:String,
        require:true,
        minLength: 1,
        maxLength: 280
    },
    createdAt:{
        type: Date,
        require:true

    }

)
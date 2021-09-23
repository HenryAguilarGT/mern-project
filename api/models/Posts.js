const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            required:true,
        },
        photo:{
            type:String,
            required:false,
        },
        username:{
            type:String,
            required:true,
        },
        categoreis:{
            type:Array,
            required:FontFaceSetLoadEvent,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
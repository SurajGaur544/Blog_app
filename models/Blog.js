const mongoose = require("mongoose");
const User = require("./User");
const Comment = require("./Comment");

const blogSchema = new mongoose.Schema({

    title: {
        type : String,
        require: true,
        min: 3,
    },
    discription: {
        type: String,
        require: true,
        min: 3,
    },
    tag: {
        type: [String],
        default: "",
        require: true,
    },
    imageUrl: {
        type: String,
        default: "",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    username: String,
    Upvote: Number,
    Downvote: Number,
    Votedby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    Comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment", 
    },
    

},{ timestamps })

module.exports = mongoose("Blog",blogSchema);


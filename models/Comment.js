const mongoose = require("mongoose");
const User = require("User");
const Blog = require("Blog")


const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,                                                       
        ref: "User",
    },
    message: {
        type: String,
        
    },
    parentComment: {
        type: mongoose.Schema.Types.ObjectId,                                                       
        ref: "comment",
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,                                                       
        ref: "Blog",
    },
    like: {
        type: Number,
        
    },
    isNested: Boolean,
    comment: [this],
},
  { timestamps }
);

userSchema.pre('save',async function (next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
    next();
});

module.export = mongoose.model("comment",commentSchema);





// User: (Reference to the user who made the comment)
// Message: (String)
// Like: (Number)
// Is Nested: (Boolean)
// Parent Comment: (Reference to the parent comment, if nested)
// Blog: (Reference to the associated blog post)
// Comments: (Array of nested comments)
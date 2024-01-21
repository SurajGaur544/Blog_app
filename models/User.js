const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Blog = require("./Blog");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 25,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 5,
    },  
    later: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Blog",
       },
    ],
    resetPasswordToken: String,
    resetPasswordExpiry: String, 
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

module.export = mongoose.model("User",userSchema);
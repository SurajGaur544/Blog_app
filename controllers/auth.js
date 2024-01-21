const mongoose = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "suraj123@";

creatUser = async ( req, res ) => {
    const { username, password, email } = req.body;
    try{
        const userInput = new User({ username, password, email });
        const user = await userInput.save();
        const token = jwt.sign({ username: user.username, userId: user._id }, secretKey);
        return res.status(200).json({ message: "User register successfully", token });
    }catch(err) {
        return res.status(401).json({ message: "User registering failed", status: "error" });
    }
}

loginUser = async ( req, res ) => {
    const { username, password } = req.body;
    try{
        if(!username || !password){
            return res.status(401).json({ message: "Username or password cannot be empty", status: "error" });
        }
        const user = await User.findOne({ username });
        if(!user){
            return res.status(401).json({ message: "Username invalid", status: "error" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch) {
          return res.status(401).json({ message: "Username/password invalid", status: "error" });
        }

        const token = jwt.sign({ username: user.username, userId: user._id }, secretKey);
        return res.status(201).json({ message: "login success", token });
       
    }catch(err) {
        return res.status(401).json({ message: "Auth failed", status: "error" });
    }
};

const getUser = async (req, res) => {
    const id = req.body;
    const user = User.findById(id).select("-password");
    return res.status(201).json({ user })
}

module.exports = {creatUser, loginUser, getUser};
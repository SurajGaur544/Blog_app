const express = require("express");
const mongoose = require("mongoose")

const app = express();
const dbUrl = process.env.DB_URL;

// connect to bd

function connectToMongoDB(){
    try{
        mongoose.connect(dbUrl);
        console.log("connected DB");
    }catch(err) {
        console.log("cannot connect DB");
    }
}
connectToMongoDB();

// Middleware 
app.use(express.json());

// end points

app.get("/",(req, res) => {
    res.send("Server is running");
});




const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port: ${PORT}`);
})
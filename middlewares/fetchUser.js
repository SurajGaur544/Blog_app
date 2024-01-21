

const secretKey = "suraj123@";

const jwt = require("jsonwebtoken");

module.exports.fetchUser = (req, res) => {
    const token = req.headers.authorization.split(" ")[1];

    if(!token){
        return res
        .status(401)
        .json({message: "Unauthorized access", status: "erroe"});
    }

    jwt.verify(token, secretKey, (err, decoded ) => {
        if(err){
            return res
            .status(401)
            .json({ message : "Unauthorized access", status:"erroe" })
        }
        req.user = decoded.user;
        next();
        
    });
}
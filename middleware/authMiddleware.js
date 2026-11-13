const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async(req, res, next) => {
    try {
       // Get auth header
       const authHeader = req.headers.authorization; 
       if(!authHeader || ! authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: "Access denied. Authentication token required."
        });
       }
       // Extract token
       const token = authHeader.split(" ")[1];
       const decoded = jwt.verify(token, process.env.JWT_SECRET);

       // Find authenicated user 
       const user = await User.findById(decoded.id).select("-password");
       if (!user) {
        return res.status(401).json({
            message: "User no longer exists"
        });
       }
       // Attach user to request
       req.user = user; 
       next();
    } catch (error) {
        if(
            error.name === "JsonWebTokenError" || error.name === "TokenExpiredError"
        ) {
            return res.status(401).json({
                message: "Invalid or expired token"
            });
        }
        console.error("Authentication error: ", error);
        return res.status(500).json({
            message: "Authentication server error"
        });
        
      
    }
    
};

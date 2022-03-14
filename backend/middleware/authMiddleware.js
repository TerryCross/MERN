import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../model/userSchema.js'

const protect = asyncHandler(async (req, res, next) => {
    console.log("PROTECT");
    let token;
    //if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    if(req.headers?.authorization?.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("set rq.user",decodede);
            req.user = await User.findById(decoded.id).select('-password');
            next(); // next middleware
        } catch(e) {
            console.log("auth none, send 401");
            res.status(401);
            throw new Error("Not authorized, wrong token.");
        }
        
    }
    if(!token) {
        res.status(401);
        throw new Error("Not authorized, no token -- get one by logging-in.");
    }
})
export default protect;

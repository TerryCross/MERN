
// See routes defined in ../routes/userRoutes.js

import asyncHandler from 'express-async-handler';
//-- allows one to use errorHandler instead of catching missed promises.
// -- Pass your function as first arg to asyncHandler();

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../model/userSchema.js';

// @POST /api/users
const registerUser = asyncHandler(async (req, res) => {     // authenticate
  const { name, email, password } = req.body;
  console.log("Got req body:", req.body);
    if(!name || !email || !password) {
      res.status(400);
      throw new Error(`Fill all fields: ${name}, ${email}, ${password}`);
    }
  const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400);
      throw new Error("Rejecting, email previously registered");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
        name, email, password: hash
    });
    if(user) {
        res.status(201).json({
          _id: user.id, name: user.name, email: user.email, pw: user.password,
          token: generateToken(user.id)
        });
    } else {
        res.status(400);
        throw new Error("Bad user data");
    }
    console.log("reg");
    res.json({"reg":"user"});
});


// @POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    console.log("login");
    const { email, password } = req.body;
    if( !email || !password) {
      res.status(400);
      throw new Error("Fill all fields.");
    }
  const user = await User.findOne({email});
  if(!user) {
    res.status(400);
    throw new Error("That user does not exist.");
  }
  if(await bcrypt.compare(password, user.password ))
    res.status(202).json({
      _id: user.id, name: user.name, email: user.email, pw: user.password,
      token: generateToken(user.id)
    });
  else {
    res.status(400);
    throw new Error("Invalid credentials.");
  }
  
  
});

// @GET /api/users/me
const getMe = asyncHandler(async (req, res) => {    // get id from token sent.
  console.log("reg");
  const {_id, name, email} = await User.findByIdreq(req.user.id);
  res.status(200).json ({
    id: _id,
    name,
    email
  });
  res.json({"get":"me"});
});

export { registerUser, loginUser, getMe};

function toType(obj) { return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1];}

function generateToken(id) {
  return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "30d"});
  // sign(payload, secret, {option obj}]) 
}

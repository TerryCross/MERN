

import mongoose from 'mongoose';

const goalSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },  // _id new resource is an object id.
    text: { type: String, required: true }, 
    email: String
},{
    timestamps: true
});

const mongModel = mongoose.model('Goal', goalSchema);
export default mongModel;

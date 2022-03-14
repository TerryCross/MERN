import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
},{
    timestamps: true
});

const mongModel = mongoose.model('User', userSchema);

export default mongModel;
import mongoose from 'mongoose'

const goalSchema = mongoose.Schema({
    text: { type: String, required: true }, 
    email: String
},{
    timestamps: true
});

const mongModel = mongoose.model('Goal', goalSchema);
export default mongModel;

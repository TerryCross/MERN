import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB Connected ${conn.connection.host}`.blue.underline);
    } catch(e) {
        console.log("Error, db.js mongoose.connect ", e);
        process.exit(1);
    };
}
export default connectDB

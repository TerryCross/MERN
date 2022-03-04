
import express from 'express';
import dotenvmod from 'dotenv';
import router from './routes/goalRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import colors from 'colors';    // changes String.prototype
import connectDB from './config/db.js'

const dotenv = dotenvmod.config();
console.log("Good day");
console.log(".env port:", process.env.PORT);

connectDB();

const port = process.env.PORT || 4000;

const app = express();
// middleware needed for req.body access
app.use(express.json());
//
app.use('/api/goals', router);

app.use(errorHandler); // Overrides the default express error handler

/* app.get('/api/goals', (req, res) => {
 *     res.status(200).json({at1: "lunch"});
 * }); */

app.listen(port, () => console.log(`Server started on ${port}`));

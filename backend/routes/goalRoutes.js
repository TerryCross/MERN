
import express from 'express';
import {getGoals, setGoal, updateGoal, deleteGoal} from '../controllers/goalControlled.js';

const router = express.Router()
console.log("goalRoutes.js", "process.env.NODE_ENV",process.env.NODE_ENV);
router.get('/', getGoals);
router.post('/', setGoal);
router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);

// Can use chaining to rm 2 lines, eg,
// router.route('/').get(getGoals).post(setGoal);
// same for /:id saves another line.
export default router;

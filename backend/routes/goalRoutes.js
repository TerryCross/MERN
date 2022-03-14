
import express from 'express';
import {getGoals, setGoal, updateGoal, deleteGoal} from '../controllers/goalControlled.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', protect, getGoals);
router.post('/', protect, setGoal);
router.put('/:id', protect, updateGoal);
router.delete('/:id', protect, deleteGoal);

export default router;

// Can use chaining to rm 2 lines, eg,
// router.route('/').get(getGoals).post(setGoal);
// same for /:id saves another line.


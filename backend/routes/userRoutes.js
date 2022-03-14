
import express from 'express';
import {registerUser, loginUser, getMe} from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/', registerUser);   // generates token so cant protect cos no token yet.
router.post('/login', loginUser); // ditto
router.get('/me', protect, getMe);

export default router;

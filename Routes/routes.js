import express from 'express';
import { profile, register,users } from '../Controllers/contollers.js';
const router = express.Router();

router.post('/register', register);
router.get('/users', users);
router.get('/:uid', profile);

export default router;


import express from 'express';
import userCtrl from '../Controllers/UserController.js';

const router = express.Router();

router.get('/api/users', userCtrl.getAllUsers);
router.get('/api/users/:id', userCtrl.getUserById);
router.post('/api/users', userCtrl.createUser);
router.put('/api/users/:id', userCtrl.updateUserById);
router.delete('/api/users/:id', userCtrl.deleteUserById);
router.delete('/api/users', userCtrl.deleteAllUsers);

export default router;

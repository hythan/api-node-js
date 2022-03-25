import express from 'express';

const router = express.Router();

import AdminsController from '../src/controllers/admins-controller.js';

router.get('/admins', AdminsController.index);
router.post('/admins', AdminsController.create);
router.patch('/admins/:id', AdminsController.update);
router.delete('/admins/:id', AdminsController.delete);

export default router;
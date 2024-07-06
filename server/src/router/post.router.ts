import express from 'express';
import { postController } from '../controller';
const router = express.Router();
router.get('/all', postController.getAllPost)
export default router;
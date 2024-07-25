import express from 'express';
import { postController } from '../controller';
const router = express.Router();
router.get('/all', postController.getAllPost)
router.get('/limit', postController.getAllByLimit)
router.get('/lated-post', postController.getLatedPost)
export default router;
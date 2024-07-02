import express, { Router } from 'express';
import { categoryController } from '../controller';
const router:Router = express.Router();
router.get("/all", categoryController.getCategory)
export default router;
import { insertController } from '../controller';
import express from 'express';
const router = express.Router();

router.get("/", insertController.insertData)
export default router;
import { insertController } from '../controller';
import express from 'express';
const router = express.Router();

router.get("/", insertController.insertData)
router.get("/price", insertController.insertPrice);
router.get("/acreage", insertController.insertAcreage);
export default router;
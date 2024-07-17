import express from 'express';
import { filterController } from '../controller';
const router = express.Router();

router.get('/price', filterController.getFilterPrice)
router.get('/acreage', filterController.getFilterAcreage)
export default router;
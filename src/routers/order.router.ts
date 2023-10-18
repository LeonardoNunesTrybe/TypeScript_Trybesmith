import { Router } from 'express';
import orderController from '../controllers/order.controller';

const router = Router();

// router.post('/', orderController.createProduct);
router.get('/', orderController.getOrders);

export default router;
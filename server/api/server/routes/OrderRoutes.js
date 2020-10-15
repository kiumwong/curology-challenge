import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.addOrder);
router.get('/:id', OrderController.getAOrder);
router.patch('/:id', OrderController.updatedOrder);
router.delete('/:id', OrderController.deleteOrder);

export default router;
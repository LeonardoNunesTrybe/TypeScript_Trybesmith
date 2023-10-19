import { Router } from 'express';
import productController from '../controllers/product.controller';
import { validateName, validatePrice } from '../middlewares/productValidation';

const router = Router();

router.post('/', validateName, validatePrice, productController.createProduct);
router.get('/', productController.getProducts);

export default router;
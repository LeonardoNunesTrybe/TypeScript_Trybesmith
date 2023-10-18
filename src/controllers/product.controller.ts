import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/httpStatus';

const createProduct = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const response = await productService.createProduct({ name, price, orderId });

  return res.status(mapStatusHTTP('CREATED')).json(response);
};

export default {
  createProduct,
};
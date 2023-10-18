import { Request, Response } from 'express';
import orderService from '../services/order.service';
import mapStatusHTTP from '../utils/httpStatus';

/* /const createProduct = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const response = await orderService.createProduct({ name, price, orderId });

  return res.status(mapStatusHTTP('CREATED')).json(response);
};/ */

const getOrders = async (req: Request, res: Response) => {
  const response = await orderService.getOrders();

  return res.status(mapStatusHTTP(response.status)).json(response.data);
};

export default {
  getOrders,
};
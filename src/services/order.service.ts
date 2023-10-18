import { Sequelize } from 'sequelize';

import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

/* /const createProduct = async ({ name, price, orderId }: 
  OrderInputtableTypes): Promise<Product> => {
  const product = await OrderModel.create({ name, price, orderId });
  return product.dataValues;
};/ */

const getOrders = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const ordersList = await OrderModel.findAll({
    include: {
      model: ProductModel, as: 'productIds', attributes: [] },
    raw: true,
    attributes: [
      'id',
      'userId',
      [Sequelize.fn('JSON_ARRAYAGG', Sequelize.col('productIds.id')), 'productIds'],
    ],
    group: ['id'],
  });

  return { status: 'SUCCESSFUL', data: ordersList };
};

export default {
  getOrders,
};
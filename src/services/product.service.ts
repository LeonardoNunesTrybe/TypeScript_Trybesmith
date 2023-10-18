import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

const createProduct = async ({ name, price, orderId }: 
ProductInputtableTypes): Promise<Product> => {
  const product = await ProductModel.create({ name, price, orderId });
  return product.dataValues;
};

const getProducts = async (): Promise<Product[]> => {
  const productsList = await ProductModel.findAll();
  return productsList.map((product) => product.dataValues);
};

export default {
  createProduct,
  getProducts,
};
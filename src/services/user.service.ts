import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../auth/jwt';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';

const userLogin = async (username: string, password: string): Promise<ServiceResponse<Token>> => {
  if (!username || !password) {
    return { status: 'BAD_REQUEST', data: { message: '"username" and "password" are required' } };
  }
  const foundUser = await UserModel.findOne({ where: { username } });
  if (!foundUser || !bcrypt.compareSync(password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  } 
  
  const { id } = foundUser.dataValues;
  const token = jwt.createToken({ id, username });
  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  userLogin,
};
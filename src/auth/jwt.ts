import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/User';

const secret = process.env.JWT_SECRET || 'secret';

/* /const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};/ */

const createToken = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

const decodeToken = (token: string): TokenPayload => {
  const decripted = jwt.verify(token, secret) as TokenPayload;
  return decripted;    
};
  
export default {
  createToken,
  decodeToken,
};
import { Request, Response } from 'express';
import userService from '../services/user.service';
import mapStatusHTTP from '../utils/httpStatus';

const userLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const response = await userService.userLogin(username, password);

  return res.status(mapStatusHTTP(response.status)).json(response.data);
};

export default {
  userLogin,
};
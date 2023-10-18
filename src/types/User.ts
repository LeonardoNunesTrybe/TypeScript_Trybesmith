export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type TokenPayload = {
  id: number;
  username: string;
};

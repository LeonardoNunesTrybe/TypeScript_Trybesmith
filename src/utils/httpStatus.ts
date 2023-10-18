const httpErrorMap: { [key: string]: number } = {
  SUCCESSFUL: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
};

const mapStatusHTTP = (status: string): number => httpErrorMap[status] || 500;

export default mapStatusHTTP;
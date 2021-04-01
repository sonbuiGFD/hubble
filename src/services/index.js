import { request } from 'utils/request';

const AUTHENTICATE_TOKEN = '/api/authenticate/token';
export const authenticateTokenService = (token) =>
  request({
    url: AUTHENTICATE_TOKEN,
    method: 'POST',
    data: { token },
  });

import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';
import { CreateTokenProps } from '../_type/auth.dto.ts';

class AuthService {
  public createToken(data: CreateTokenProps) {
    return HttpClient.post(`${ENDPOINT.AUTH}`, data);
  }
}

export const authService = new AuthService();

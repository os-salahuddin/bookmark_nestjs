import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { message: 'chesta' };
  }

  signup() {
    return { message: 'monobol' };
  }
}

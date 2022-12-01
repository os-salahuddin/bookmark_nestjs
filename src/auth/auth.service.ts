import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { message: 'hello' };
  }

  signup() {
    return { message: 'world' };
  }
}

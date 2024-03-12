import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Get()
  getauth(){
    return 'get de auth';
  }

}

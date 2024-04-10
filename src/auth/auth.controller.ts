import { Controller, Get, Put } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Get()
  getAuth(){
    return 'get de auth';
  }

  @Put()
  putAuth(){
    return 'put de auth';
  }

}

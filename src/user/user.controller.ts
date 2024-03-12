import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  
  @Get()
  userget() {
    return 'ruta get de usuarios';
  }

}

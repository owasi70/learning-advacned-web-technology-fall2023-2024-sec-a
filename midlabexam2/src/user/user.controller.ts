import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.registerUser(createUserDto);
  }

  

  
  
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  // Req,
} from '@nestjs/common';
// import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['ali', 'ahmad', 'adham'];
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Find One User By ID: ${id}`;
  }

  @Post()
  create(@Body() userData: CreateUserDto): string {
    console.log(userData);
    return 'Create User';
  }

  @Patch()
  update(@Body() userData: UpdateUserDto): string {
    console.log(userData);
    return 'Update User';
  }

  @Delete()
  @HttpCode(204)
  remove(): void {}
}

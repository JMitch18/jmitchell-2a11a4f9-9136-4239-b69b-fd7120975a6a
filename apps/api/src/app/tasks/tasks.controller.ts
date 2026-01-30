import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards, Query } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';
import { RbacGuard } from '../auth/rbac.guard';
import { RequirePermissions } from '@org/auth';
import type { CreateTaskDto, UpdateTaskDto } from '@org/data';
import { TasksService } from './tasks.service';

@Controller('tasks')
@UseGuards(JwtGuard, RbacGuard)
export class TasksController {
  constructor(private tasks: TasksService) {}

  @Post()
  @RequirePermissions('task:create')
  create(@Body() dto: CreateTaskDto) {
    return this.tasks.create(dto);
  }

  @Get()
  @RequirePermissions('task:read')
  list(@Query('status') status?: string, @Query('category') category?: string) {
    return this.tasks.list({ status, category });
  }

  @Put(':id')
  @RequirePermissions('task:update')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasks.update(id, dto);
  }

  @Delete(':id')
  @RequirePermissions('task:delete')
  remove(@Param('id') id: string) {
    return this.tasks.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import type { CreateTaskDto, UpdateTaskDto } from '@org/data';

@Injectable()
export class TasksService {
  async create(dto: CreateTaskDto) {
    // TODO: connect to DB later
    return { id: crypto.randomUUID(), ...dto };
  }

  async list(filters: { status?: string; category?: string }) {
    // TODO: connect to DB later
    return { filters, items: [] as any[] };
  }

  async update(id: string, dto: UpdateTaskDto) {
    // TODO: connect to DB later
    return { id, ...dto };
  }

  async remove(id: string) {
    // TODO: connect to DB later
    return { id, deleted: true };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import type { TaskDto, CreateTaskDto, UpdateTaskDto } from '@org/data';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  list(filters?: { status?: string; category?: string }) {
    let params = new HttpParams();
    if (filters?.status) params = params.set('status', filters.status);
    if (filters?.category) params = params.set('category', filters.category);
    return this.http.get<TaskDto[]>('/api/tasks', { params });
  }

  create(dto: CreateTaskDto) {
    return this.http.post<TaskDto>('/api/tasks', dto);
  }

  update(id: string, dto: UpdateTaskDto) {
    return this.http.put<TaskDto>(`/api/tasks/${id}`, dto);
  }

  remove(id: string) {
    return this.http.delete<void>(`/api/tasks/${id}`);
  }
}

import type { TaskStatus } from '../models.js';


export interface TaskDto {
  id: string;
  title: string;
  status: string;
  category?: string;
}

export type  CreateTaskDto = {
  title: string;
  category?: string;
}

export type  UpdateTaskDto = {
  title?: string;
  category?: string;
  status?: TaskStatus;
}

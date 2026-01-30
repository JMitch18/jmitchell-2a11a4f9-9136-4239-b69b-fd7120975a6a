export type TaskStatus = 'open' | 'done';

export interface TaskDto {
  id: string;
  title: string;
  status: string;
  category?: string;
}

export interface CreateTaskDto {
  title: string;
  category?: string;
}

export interface UpdateTaskDto {
  title?: string;
  category?: string;
  status?: TaskStatus;
}

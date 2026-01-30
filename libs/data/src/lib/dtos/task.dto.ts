export type TaskStatus = 'open' | 'done';

export interface CreateTaskDto {
  title: string;
  category?: string;
}

export interface UpdateTaskDto {
  title?: string;
  category?: string;
  status?: TaskStatus;
}

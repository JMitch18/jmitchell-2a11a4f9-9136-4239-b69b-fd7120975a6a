export type Role = 'OWNER' | 'ADMIN' | 'VIEWER';

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface JwtUser {
  sub: string;  // userId
  role: Role;
  orgId: string;
}

export interface TaskDto {
  id: string;
  title: string;
  description?: string;
  category?: 'Work' | 'Personal' | string;
  status: TaskStatus;
  orderIndex: number;
  ownerUserId: string;
  orgId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskDto {
  title: string;
  description?: string;
  category?: string;
  status?: TaskStatus;
}

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  category?: string;
  status?: TaskStatus;
  orderIndex?: number;
}

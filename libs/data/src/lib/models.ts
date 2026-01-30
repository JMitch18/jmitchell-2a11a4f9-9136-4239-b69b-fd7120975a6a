export type Role = 'OWNER' | 'ADMIN' | 'VIEWER';

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

import type { Role } from '@org/data';

export const PERMS_KEY = 'perms';

export type Permission =
  | 'task:read'
  | 'task:create'
  | 'task:update'
  | 'task:delete'
  | 'audit:read';

const rolePerms: Record<Role, Permission[]> = {
  VIEWER: ['task:read'],
  ADMIN: ['task:read', 'task:create', 'task:update', 'task:delete', 'audit:read'],
  OWNER: ['task:read', 'task:create', 'task:update', 'task:delete', 'audit:read'],
};

export function hasPermission(role: Role, perm: Permission): boolean {
  return rolePerms[role]?.includes(perm) ?? false;
}

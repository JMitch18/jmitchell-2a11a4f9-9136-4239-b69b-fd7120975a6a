import type { Role } from '@org/data';

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
  // role inheritance naturally handled by mapping (OWNER includes everything)
  return rolePerms[role]?.includes(perm) ?? false;
}

import { SetMetadata } from '@nestjs/common';
import type { Permission } from './rbac.ts';

export const PERMS_KEY = 'required_perms';
export const RequirePermissions = (...perms: Permission[]) =>
  SetMetadata(PERMS_KEY, perms);
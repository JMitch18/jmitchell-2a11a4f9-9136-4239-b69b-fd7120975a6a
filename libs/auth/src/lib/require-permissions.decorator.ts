import { SetMetadata } from '@nestjs/common';
import { PERMS_KEY, type Permission } from './rbac.js';

export const RequirePermissions = (...perms: Permission[]) =>
  SetMetadata(PERMS_KEY, perms);

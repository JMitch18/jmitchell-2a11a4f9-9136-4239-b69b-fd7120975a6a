import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMS_KEY, hasPermission, type Permission } from '@org/auth';

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    const required = this.reflector.getAllAndOverride<Permission[]>(PERMS_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]) ?? [];

    for (const perm of required) {
      if (!hasPermission(user.role, perm)) throw new ForbiddenException('Forbidden');
    }
    return true;
  }
}

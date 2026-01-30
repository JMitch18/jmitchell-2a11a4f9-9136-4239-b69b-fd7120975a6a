import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';
import { RbacGuard } from '../auth/rbac.guard';
import { RequirePermissions } from '@org/auth';
import { AuditService } from './audit.service';

@Controller('audit-log')
@UseGuards(JwtGuard, RbacGuard)
export class AuditController {
  constructor(private audit: AuditService) {}

  @Get()
  @RequirePermissions('audit:read')
  list() {
    return this.audit.list();
  }
}

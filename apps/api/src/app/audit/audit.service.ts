import { Injectable } from '@nestjs/common';

export type AuditEntry = {
  ts: string;
  userId: string;
  action: string;
  resource: string;
  outcome: 'ALLOW' | 'DENY';
};

@Injectable()
export class AuditService {
  private entries: AuditEntry[] = [];

  log(e: Omit<AuditEntry, 'ts'>) {
    const entry = { ts: new Date().toISOString(), ...e };
    this.entries.unshift(entry);
    console.log('[AUDIT]', entry);
  }

  list() {
    return this.entries.slice(0, 500);
  }
}

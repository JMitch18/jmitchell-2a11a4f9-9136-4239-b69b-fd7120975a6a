import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { Role } from '@org/data';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @Column({ unique: true }) email!: string;
  @Column() passwordHash!: string;
  @Column() role!: Role;       // OWNER | ADMIN | VIEWER
  @Column() orgId!: string;
}

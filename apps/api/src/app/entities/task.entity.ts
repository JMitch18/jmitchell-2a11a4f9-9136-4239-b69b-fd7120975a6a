import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { TaskStatus } from '@org/data';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @Column() title!: string;
  @Column({ nullable: true }) description?: string;
  @Column({ nullable: true }) category?: string;

  @Column({ default: 'TODO' }) status!: TaskStatus;
  @Column({ default: 0 }) orderIndex!: number;

  @Column() ownerUserId!: string;
  @Column() orgId!: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }) createdAt!: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }) updatedAt!: string;
}

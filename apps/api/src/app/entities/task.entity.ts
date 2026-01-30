import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import type { TaskStatus } from '@org/data'; // optional

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text', default: 'open' })
  status!: string; 

  @Column({ type: 'text', nullable: true })
  category!: string | null;
}

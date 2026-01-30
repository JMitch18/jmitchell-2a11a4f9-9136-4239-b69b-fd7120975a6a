import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';
import { User } from './entities/user.entity';
import { Task } from './entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_PATH ?? 'data.db',
      entities: [Organization, User, Task],
      synchronize: true, // ok for take-home
    }),
    TypeOrmModule.forFeature([Organization, User, Task]),
  ],
})
export class AppModule {}

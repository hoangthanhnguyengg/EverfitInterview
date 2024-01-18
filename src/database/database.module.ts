import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Entities } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Use 'postgres' for postgres
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '14121999aA*',
      database: 'localdb',
      entities: [...Entities],
      synchronize: false, // Set to false in production
      logging: true,
    }),
  ],
})
export class DatabaseModule {}

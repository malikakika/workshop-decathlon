import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { UsersModule } from '../user/user.module';

@Module({
  imports: [
    DatabaseModule, 
    UsersModule, 
  ],
})
export class AppModule {}

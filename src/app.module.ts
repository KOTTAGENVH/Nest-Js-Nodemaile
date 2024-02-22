import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailerModule } from './emailer/emailer.module';

@Module({
  imports: [EmailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

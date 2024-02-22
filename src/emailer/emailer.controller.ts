/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { EmailerService } from './emailer.service';

@Controller('emailer')
export class EmailerController {
  constructor(private readonly emailerService: EmailerService) {}

  @Post('email')
  async sendEmail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('body') body: string,
  ): Promise<void> {
    await this.emailerService.sendMail(to, subject, body).then(() => {
      return 'Email sent successfully';
    });
  }
}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';


@Injectable()
export class EmailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Create a transporter object using SMTP
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '', // Replace with your email address
        pass: '', // Replace with your email password  //Generate a app password from your google account
      },
    });
  }


  //sendMail function when employee is created
  async sendMail(to: string, subject: string, body: string): Promise<void> {
    try {
      // Send mail with defined transport object
      await this.transporter.sendMail({
        from: '', // Replace with your email address
        to,
        subject,
        text: body,
      });

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email', error);
    }
  }
}

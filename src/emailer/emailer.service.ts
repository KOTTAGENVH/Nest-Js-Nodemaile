import { Injectable } from '@nestjs/common';
import { CreateEmailerDto } from './dto/create-emailer.dto';
import { UpdateEmailerDto } from './dto/update-emailer.dto';

@Injectable()
export class EmailerService {
  create(createEmailerDto: CreateEmailerDto) {
    return 'This action adds a new emailer';
  }

  findAll() {
    return `This action returns all emailer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailer`;
  }

  update(id: number, updateEmailerDto: UpdateEmailerDto) {
    return `This action updates a #${id} emailer`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailer`;
  }
}

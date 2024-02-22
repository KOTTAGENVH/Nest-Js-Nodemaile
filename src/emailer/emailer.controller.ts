import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailerService } from './emailer.service';
import { CreateEmailerDto } from './dto/create-emailer.dto';
import { UpdateEmailerDto } from './dto/update-emailer.dto';

@Controller('emailer')
export class EmailerController {
  constructor(private readonly emailerService: EmailerService) {}

  @Post()
  create(@Body() createEmailerDto: CreateEmailerDto) {
    return this.emailerService.create(createEmailerDto);
  }

  @Get()
  findAll() {
    return this.emailerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailerDto: UpdateEmailerDto) {
    return this.emailerService.update(+id, updateEmailerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailerService.remove(+id);
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Controller('kafka')
export class KafkaController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Get('send')
  sendMessage(@Query('message') message: string) {
    const parsedMessage = { key: 'value', message };
    this.kafkaService.emitMessage('my-topic', parsedMessage);
    return 'Message sent';
  }
}

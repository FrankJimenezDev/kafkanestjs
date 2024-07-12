import { Body, Controller, Get, Query } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Controller('kafka')
export class KafkaController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Get('send')
  sendMessage(@Body() message: any) {
    const parsedMessage = message;
    this.kafkaService.emitMessage('my-topic', JSON.stringify(parsedMessage));
    return 'Message sent';
  }
}

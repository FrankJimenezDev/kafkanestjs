import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Injectable()
export class KafkaService implements OnModuleInit {
  constructor(@Inject('KAFKA_SERVICE') private readonly clientKafka: ClientKafka) {}
  private readonly logger = new Logger(KafkaService.name);

  async onModuleInit() {
    await this.clientKafka.connect();
  }

  emitMessage(topic: string, message: any) {
    this.logger.log(`Emitting message to Kafka topic "${topic}": ${JSON.stringify(message)}`);
    return this.clientKafka.emit(topic, message);
  }
}

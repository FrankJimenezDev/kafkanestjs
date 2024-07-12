import { Injectable } from '@nestjs/common';
import { CreateKafkaDto } from './dto/create-kafka.dto';
import { UpdateKafkaDto } from './dto/update-kafka.dto';

@Injectable()
export class KafkaService {
  create(createKafkaDto: CreateKafkaDto) {
    return 'This action adds a new kafka';
  }

  findAll() {
    return `This action returns all kafka`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kafka`;
  }

  update(id: number, updateKafkaDto: UpdateKafkaDto) {
    return `This action updates a #${id} kafka`;
  }

  remove(id: number) {
    return `This action removes a #${id} kafka`;
  }
}

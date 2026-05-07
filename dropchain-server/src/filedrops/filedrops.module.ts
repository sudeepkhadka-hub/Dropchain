import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileDrop } from './filedrop.entity';
import { FiledropsService } from './filedrops.service';
import { FiledropsController } from './filedrops.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FileDrop])],
  providers: [FiledropsService],
  controllers: [FiledropsController],
})
export class FiledropsModule {}
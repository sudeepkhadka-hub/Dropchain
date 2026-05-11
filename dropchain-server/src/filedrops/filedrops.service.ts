import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileDrop } from './filedrop.entity';
import { CreateFileDropDto } from './filedropDTO/filedrop.dto';
import { Express } from 'express'; // ← Add this
import { NotFoundException } from '@nestjs/common';
import { UpdateFileDropDto } from './filedropDTO/update-filedrop.dto';

@Injectable()
export class FiledropsService {
  constructor(
    @InjectRepository(FileDrop)
    private repo: Repository<FileDrop>,
  ) {}

  async create(
    file: Express.Multer.File,
    body: CreateFileDropDto,
  ): Promise<FileDrop> {
    if (!file) {
      throw new Error('File is required');
    }

    const newDrop: Partial<FileDrop> = {
      filename: file.originalname,
      s3Url: 'local-file',
      password: body.password || undefined,
      maxViews: Number(body.maxViews) || 1,
      expiresAt: body.expiresAt
        ? new Date(body.expiresAt)
        : new Date(Date.now() + 86400000),
    };

    return this.repo.save(newDrop);
  }

  async findOne(id: string) {
  const filedrop = await this.repo.findOne({
    where: { id },
  });

  if (!filedrop) {
  throw new NotFoundException('FileDrop not found');
  }

  return filedrop;
};

  async findall() {
    return this.repo.find({
      order: {
        createdAt: 'DESC',
      },
    });
  };

  async delete(id: string) {
    const result = await this.repo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('FileDrop not found');
    }
    return { message: 'FileDrop deleted successfully' };
  }


  async update(id: string, body: UpdateFileDropDto) {
    const filedrop = await this.repo.findOne({
      where: { id },
    });

    if (!filedrop) {
      throw new NotFoundException('FileDrop not found');
    }

    Object.assign(filedrop, body);
    return this.repo.save(filedrop);
  }
}

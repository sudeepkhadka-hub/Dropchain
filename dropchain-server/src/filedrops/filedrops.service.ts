import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileDrop } from './filedrop.entity';

@Injectable()
export class FiledropsService {
  constructor(
    @InjectRepository(FileDrop)
    private repo: Repository<FileDrop>,
  ) {}

  async create(file: any, body: any) {
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
}
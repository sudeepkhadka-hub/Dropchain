import { Test, TestingModule } from '@nestjs/testing';
import { FiledropsService } from './filedrops.service';

describe('FiledropsService', () => {
  let service: FiledropsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiledropsService],
    }).compile();

    service = module.get<FiledropsService>(FiledropsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

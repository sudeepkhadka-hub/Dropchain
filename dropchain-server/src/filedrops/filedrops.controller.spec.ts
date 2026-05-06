import { Test, TestingModule } from '@nestjs/testing';
import { FiledropsController } from './filedrops.controller';

describe('FiledropsController', () => {
  let controller: FiledropsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiledropsController],
    }).compile();

    controller = module.get<FiledropsController>(FiledropsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FiledropsService } from './filedrops.service';

@Controller('filedrops')
export class FiledropsController {
  constructor(private readonly filedropsService: FiledropsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    return this.filedropsService.create(file, body);
  }
}

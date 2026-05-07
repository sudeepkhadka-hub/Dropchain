import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FiledropsService } from './filedrops.service';
import { CreateFileDropDto } from './filedropDTO/filedrop.dto';

@Controller('filedrops')
export class FiledropsController {
  constructor(private readonly filedropsService: FiledropsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File,
   @Body() body: CreateFileDropDto,
  ) {
    return this.filedropsService.create(file, body);
  }
}

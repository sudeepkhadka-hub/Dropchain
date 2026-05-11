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
import { Get, Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { UpdateFileDropDto } from './filedropDTO/update-filedrop.dto';


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


  @Get(':id')
  getFileDrop(@Param('id') id: string) {
    return this.filedropsService.findOne(id);
  }


  @Get()
  getAll() {
    return this.filedropsService.findall();
}

  @Delete(':id')
  deleteFileDrop(@Param('id') id: string) {
    return this.filedropsService.delete(id);
  }


  @Patch(':id')
  updateFileDrop(
  @Param('id') id: string,
  @Body() body: UpdateFileDropDto,
) {
  return this.filedropsService.update(id, body);
}
}

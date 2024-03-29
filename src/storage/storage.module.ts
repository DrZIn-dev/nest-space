import { S3Provider } from '@/pkg/provider/s3.provider';
import { Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';

@Module({
  imports: [S3Provider],
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}

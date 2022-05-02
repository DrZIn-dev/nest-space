import { S3Config } from '@/pkg/config/s3.config';
import { S3Service } from '@/s3/s3.service';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class StorageService {
  constructor(
    private s3Service: S3Service,
    @Inject(S3Config.KEY)
    private s3Config: ConfigType<typeof S3Config>,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    console.log(file);
    const command = new PutObjectCommand({
      Bucket: this.s3Config.bucket,
      Key: file.originalname,
      Body: file.buffer,
    });

    return await this.s3Service.getS3Client().send(command);
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from '../config/database.config';
import { GenericConfig } from '../config/generic.config';
import { S3Config } from '../config/s3.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DatabaseConfig, GenericConfig, S3Config],
    }),
  ],
  exports: [ConfigModule],
})
export class ConfigProvider {}

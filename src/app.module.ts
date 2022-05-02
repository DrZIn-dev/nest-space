import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { S3Config } from './pkg/config/s3.config';
import { ConfigProvider } from './pkg/provider/config.provider';
import { LoggerProvider } from './pkg/provider/logger.provider';
import { PostgresProvider } from './pkg/provider/postgres.provider';
import { S3Module } from './s3/s3.module';
/*
  bucket: 'learn-nest-space',
      region: 'sgp1',
      endpoint: 'https://sgp1.digitaloceanspaces.com',
      credentials: {
        accessKeyId: 'FFV2XIVTRMCX5BA57X4Z',
        secretAccessKey: 'DqGlIbe48edUEAtX7YHYuVMBHyL7gdWOjtDMWVTMrFs',
      },
*/
@Module({
  imports: [
    ConfigProvider,
    PostgresProvider,
    LoggerProvider,
    HealthModule,
    S3Module.forRootAsync({
      imports: [ConfigModule],
      useFactory: (s3Config: ConfigType<typeof S3Config>) => ({
        bucket: s3Config.bucket,
        region: s3Config.region,
        endpoint: s3Config.region,
        credentials: {
          accessKeyId: s3Config.key,
          secretAccessKey: s3Config.key,
        },
      }),
      inject: [S3Config.KEY],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

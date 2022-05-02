import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ConfigProvider } from './pkg/provider/config.provider';
import { LoggerProvider } from './pkg/provider/logger.provider';
import { PostgresProvider } from './pkg/provider/postgres.provider';
import { S3Provider } from './pkg/provider/s3.provider';

@Module({
  imports: [
    ConfigProvider,
    PostgresProvider,
    LoggerProvider,
    HealthModule,
    S3Provider,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

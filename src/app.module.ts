import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ConfigProvider } from './pkg/provider/config.provider';
import { LoggerProvider } from './pkg/provider/logger.provider';
import { PostgresProvider } from './pkg/provider/postgres.provider';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    ConfigProvider,
    PostgresProvider,
    LoggerProvider,
    HealthModule,

    StorageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { FeaturesModule } from './features/features.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [FeaturesModule, ConfigModule.forRoot()],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ApiUtilsDatabaseModule } from '@simple-shop-manager/api/utils/database';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiUtilsDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

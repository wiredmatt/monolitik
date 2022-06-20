import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AssetsModule } from './modules/assets/assets.module'

@Module({
  imports: [AssetsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BdModuleModule } from '../infraestructure/driven-adapters/BD/src/bd-module/bd-module.module';

@Module({
  imports: [BdModuleModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

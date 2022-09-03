import { Module } from '@nestjs/common';
import { UserRepositoryAdapter } from './user/userRepositoryAdapter';
import { USERREPOSITORY } from 'domain/gateway/userRepository';

@Module({
  providers: [{ provide: USERREPOSITORY, useClass: UserRepositoryAdapter }],

})
export class BdModuleModule {}

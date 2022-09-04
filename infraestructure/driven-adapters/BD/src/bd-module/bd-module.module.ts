import { Module } from '@nestjs/common';
import { UserRepositoryAdapter } from './user/userRepositoryAdapter';
import { USERREPOSITORY } from 'domain/gateway/userRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
const DatabaseProvider = [
  TypeOrmModule.forRoot({
    ssl: false,
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'noteimporta2911',
    port: 5432,
    synchronize: true,
    entities: [__dirname + '../../modules/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '../migrations/*{.ts,.js}'],
  }),
];
@Module({
  imports: DatabaseProvider,
  providers: [{ provide: USERREPOSITORY, useClass: UserRepositoryAdapter }],
})
export class BdModuleModule {}

import { Module } from '@nestjs/common';
//import { UserRepository } from '../../../../domain/gateway/userRepository';
import {UserRepository} from 'gateway'

@Module({})
export class BdModuleModule {
    user:UserRepository;

    public void saludar(){
        this.user
    
    }


}

import { UserRepository } from 'domain/gateway/userRepository';

export class UserRepositoryAdapter implements UserRepository {
  save(): void {}
}

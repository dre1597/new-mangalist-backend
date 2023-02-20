import { UserProps } from './types';
import { UserEntity } from './user.entity';

export abstract class UserRepository {
  abstract create(user: UserProps): Promise<UserEntity>;
}

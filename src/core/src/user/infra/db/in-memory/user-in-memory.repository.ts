import { UserEntity, UserProps, UserRepository } from '../../../domain';

export class UserInMemoryRepository implements UserRepository {
  private _users: UserEntity[] = [];

  async create(props: UserProps): Promise<UserEntity> {
    const userEntity = UserEntity.create(props);
    this._users.push(userEntity);
    return userEntity;
  }
}

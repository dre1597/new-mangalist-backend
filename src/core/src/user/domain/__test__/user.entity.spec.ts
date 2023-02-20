import { describe, expect, it } from 'vitest';
import { UserEntity } from '../user.entity';
import { getUserProps, getUserPropsWithoutRole } from './mock';

describe('UserEntity', () => {
  it('should be possible to create an UserEntity', () => {
    const props = getUserProps;

    const userEntity = UserEntity.create(props);

    expect(userEntity.id).toBeDefined();
    expect(userEntity.name).toBe(props.name);
    expect(userEntity.email).toBe(props.email);
    expect(userEntity.cpf).toBe(props.cpf);
    expect(userEntity.phone).toBe(props.phone);
    expect(userEntity.password).toBe(props.password);
    expect(userEntity.role).toBe(props.role);
    expect(userEntity.createdAt).toBeDefined();
    expect(userEntity.password).toBeDefined();
  });

  it('should create an UserEntity with a USER role if role is not passed', () => {
    const userEntity = UserEntity.create(getUserPropsWithoutRole);

    expect(userEntity.role).toBe('USER');
  });
});

import { describe, expect, it } from 'vitest';
import { UserEntity, UserProps } from '../user.entity';

describe('UserEntity', () => {
  it('should be possible to create an UserEntity', () => {
    const props: UserProps = {
      name: 'any_name',
      email: 'any_email',
      cpf: 'any_cpf',
      phone: 'any_phone',
      password: 'any_password',
      role: 'USER',
    };

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
    const props: UserProps = {
      name: 'any_name',
      email: 'any_email',
      cpf: 'any_cpf',
      phone: 'any_phone',
      password: 'any_password',
    };

    const userEntity = UserEntity.create(props);

    expect(userEntity.role).toBe('USER');
  });
});

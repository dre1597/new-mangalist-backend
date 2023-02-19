import { BaseEntity } from '../../shared/domain';

const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
};

export type USER_ROLES = keyof typeof ROLES;

export type UserProps = {
  name: string;
  password: string;
  email: string;
  phone: string;
  cpf: string;
  role?: USER_ROLES;
};

export class UserEntity extends BaseEntity {
  private _name: string;
  private _password: string;
  private _email: string;
  private _phone: string;
  private _cpf: string;
  private _role: USER_ROLES;

  private constructor(props: UserProps) {
    super();

    this._name = props.name;
    this._password = props.password;
    this._email = props.email;
    this._phone = props.phone;
    this._cpf = props.cpf;
    this._role = props.role || 'USER';
  }

  get name(): string {
    return this._name;
  }

  get password(): string {
    return this._password;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get cpf(): string {
    return this._cpf;
  }

  get role(): USER_ROLES {
    return this._role;
  }

  static create(props: UserProps): UserEntity {
    return new UserEntity(props);
  }
}

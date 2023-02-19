import { UserProps } from '../../user.entity';

export const getUserProps: UserProps = {
  name: 'any_name',
  email: 'any_email',
  cpf: 'any_cpf',
  phone: 'any_phone',
  password: 'any_password',
  role: 'USER',
};

export const getUserPropsWithoutRole: UserProps = {
  name: 'any_name',
  email: 'any_email',
  cpf: 'any_cpf',
  phone: 'any_phone',
  password: 'any_password',
};

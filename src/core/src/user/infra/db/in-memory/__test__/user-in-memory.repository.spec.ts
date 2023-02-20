import { describe, expect, it } from 'vitest';
import { UserInMemoryRepository } from '../user-in-memory.repository';
import { getUserPropsMock } from './mock';

const makeSut = (): UserInMemoryRepository => new UserInMemoryRepository();

describe('UserInMemoryRepository', () => {
  describe('create', () => {
    it('should return to store an user', async () => {
      const props = getUserPropsMock;

      const userInMemoryRepository = makeSut();

      const userEntity = await userInMemoryRepository.create(props);

      expect(userEntity.id).toBeDefined();
      expect(userEntity.name).toBe(props.name);
      expect(userEntity.email).toBe(props.email);
      expect(userEntity.cpf).toBe(props.cpf);
      expect(userEntity.phone).toBe(props.phone);
      expect(userEntity.role).toBe('USER');
      expect(userEntity.createdAt).toBeDefined();
      expect(userEntity.password).toBeDefined();
    });
  });
});

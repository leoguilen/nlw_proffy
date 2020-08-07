import { CreateUserUseCase } from './CreateUserUseCase';
import { SqliteUserRepository } from '../../repositories/implementations/SqliteUserRepository';

describe('Unit test - Create User', () => {
  const repository = new SqliteUserRepository();
  const createUserUseCase = new CreateUserUseCase(repository);

  it('Creating user in database with succefully', async () => {
    const userFake = {
      name: 'Teste',
      avatar: 'teste.jpg',
      whatsapp: '(11) 1234-5678',
      bio: 'Testando criação de usuário'
    };
    
    await createUserUseCase.execute(userFake);

    const insertedUser = await repository.findAll();
    
    expect(insertedUser[insertedUser.length-1]).not.toBeNull();
    expect(insertedUser[insertedUser.length-1].name).toBe(userFake.name);
    expect(insertedUser[insertedUser.length-1].avatar).toBe(userFake.avatar);
    expect(insertedUser[insertedUser.length-1].whatsapp).toBe(userFake.whatsapp);
    expect(insertedUser[insertedUser.length-1].bio).toBe(userFake.bio);
  });
});
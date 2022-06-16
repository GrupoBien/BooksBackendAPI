import request from 'supertest';
import api from '../../api.js';
import db from '../../config/databaseTest.js';

const agent = request.agent(api);

beforeAll(async () => {
  await db.connect();
});

afterEach(async () => {
  await db.clear();
});

afterAll(async () => {
  await db.close();
});

describe('Login Controller', () => {
  test('Login in the api and register a new user', async () => {
    const resNewUser = await agent.post('/registerLogin').send({
        user: {
            nombre: "test",
            fecha_de_nacimiento: new Date(),
            mail: "test@test.com",
            nombre_app: "test",
            password: "password",
          }
      });
    const res = await agent.post('/login').send({
      mail: "test@test.com",
      password: "password"
    });
    expect(resNewUser.statusCode).toEqual(200);
    expect(res.statusCode).toEqual(200);
  });

  test('login in the api with incorrect password', async () => {
    await agent.post('/registerLogin').send({
        user: {
            nombre: "test",
            fecha_de_nacimiento: new Date(),
            mail: "test@test.com",
            nombre_app: "test",
            password: "password",
          }
      });
    const res = await agent.post('/login').send({
      mail: "test@test.com",
      password: "passwordError"
    });
    expect(res.statusCode).toEqual(400);
  })
});
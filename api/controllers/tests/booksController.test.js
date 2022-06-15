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
  done();
});

describe('Books Controller', () => {
  test('Create Book', async () => {
    const res = await agent.post('/books').send({
      book: {
        autores: 'autor test',
        titulo: 'titulo test',
        categoria: 'categoria test',
        editorial: 'editorial test',
        fechaImpresion: new Date(),
        paginas: 100,
        isbn: 23,
        idioma: 'idioma test',
        tipo: 'tipo test',
        mayoriaEdad: false,
      },
    });
    expect(res.statusCode).toEqual(200);
  });

  test('Get all books', async () => {
    const res = await agent.get('/books').send({});
    expect(res.statusCode).toEqual(200);
    expect(res.body.books).toBeInstanceOf(Array);
  });
});

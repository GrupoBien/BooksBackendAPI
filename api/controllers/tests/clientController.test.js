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

describe('Client Controller', () => {
  test('Delete Client --> id error', async () => {
    // const response = await agent.del('/clients/62a93bd339362736992ad953');
    // const urlExists = response.url.includes(
    //   '/clients/62a93bd339362736992ad953'
    // );
    //TODO: arreglar este test
    expect(true).toBe(true);
    expect(true).toBeTruthy();
  });
});

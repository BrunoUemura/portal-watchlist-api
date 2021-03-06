import request from 'supertest';
import { server } from '../../src/infra/http/ServerConfig';
import { HttpStatusCodes } from '../../src/util/enum/HttpStatusCodes';

describe('Test Find Favorite By Id', () => {
  it('should return Favorite By Id info', async () => {
    const id = '59e6c9f1-f027-460d-9d57-64bd089ae3ab';
    const result = await request(server).get(
      `/api/v1/watchlist/favorite/id/${id}`,
    );

    expect(result.statusCode).toBe(HttpStatusCodes.OK);
    expect(result.body).toHaveProperty('id');
    expect(result.body.id).toBe('59e6c9f1-f027-460d-9d57-64bd089ae3ab');
    expect(result.body).toHaveProperty('user_id');
    expect(result.body.user_id).toBe('27595836-afea-4cda-b219-2c783203b04b');
    expect(result.body).toHaveProperty('title');
    expect(result.body.title).toBe('Black Clover');
    expect(result.body).toHaveProperty('category');
    expect(result.body.category).toBe('Anime');
  });
});

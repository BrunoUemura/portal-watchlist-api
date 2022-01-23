import request from 'supertest';
import { server } from '../../src/infra/http/ServerConfig';
import { HttpStatusCodes } from '../../src/util/enum/HttpStatusCodes';

describe('Test Find Favorite By User Id', () => {
  it('should return Favorite By User Id info', async () => {
    const userId = '27595836-afea-4cda-b219-2c783203b04b';
    const result = await request(server).get(
      `/api/v1/watchlist/favorite/user/id/${userId}`,
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

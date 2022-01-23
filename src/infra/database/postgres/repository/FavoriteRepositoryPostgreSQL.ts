import Favorite from '@src/core/entity/Favorite';
import FavoriteRepository from '@src/core/repository/FavoriteRepository';
import Postgres from '@src/infra/database/postgres/Postgres';

export default class FavoriteRepositoryPostgreSQL
  implements FavoriteRepository
{
  async findById(id: string): Promise<Favorite> {
    try {
      const postgres = new Postgres();
      const database = await postgres.connect();
      const { rows }: any = await database.query(
        `SELECT * FROM watchlist WHERE id = $1`,
        [id],
      );

      await postgres.disconnect(database);

      if (rows.length === 0) {
        return null;
      }

      return {
        id: rows[0].id,
        user_id: rows[0].user_id,
        title: rows[0].title,
        category: rows[0].category,
        season: rows[0].season,
        episode: rows[0].episode,
        created_at: rows[0].created_at,
        updated_at: rows[0].episode,
      };
    } catch (error) {
      throw error;
    }
  }

  async findByUserId(user_id: string): Promise<Favorite[]> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    const { rows }: any = await database.query(
      `SELECT * FROM watchlist WHERE user_id = $1`,
      [user_id],
    );

    await postgres.disconnect(database);

    if (rows.length === 0) {
      return null;
    }

    return rows;
  }

  async findByTitle(title: string): Promise<Favorite> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    const { rows }: any = await database.query(
      `SELECT * FROM watchlist WHERE title = $1`,
      [title],
    );

    await postgres.disconnect(database);

    if (rows.length === 0) {
      return null;
    }

    return {
      id: rows[0].id,
      user_id: rows[0].user_id,
      title: rows[0].title,
      category: rows[0].category,
      season: rows[0].season,
      episode: rows[0].episode,
      created_at: rows[0].created_at,
      updated_at: rows[0].episode,
    };
  }

  async findByCategory(category: string): Promise<Favorite> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    const { rows }: any = await database.query(
      `SELECT * FROM watchlist WHERE category = $1`,
      [category],
    );

    await postgres.disconnect(database);

    if (rows.length === 0) {
      return null;
    }

    return {
      id: rows[0].id,
      user_id: rows[0].user_id,
      title: rows[0].title,
      category: rows[0].category,
      season: rows[0].season,
      episode: rows[0].episode,
      created_at: rows[0].created_at,
      updated_at: rows[0].episode,
    };
  }

  async insert(
    id: string,
    user_id: string,
    title: string,
    category: string,
    season: number,
    episode: number,
  ): Promise<Favorite> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    await database.query(
      `INSERT INTO watchlist (id, user_id, title, category, season, episode) VALUES ($1, $2, $3, $4, $5, $6)`,
      [id, user_id, title, category, season, episode],
    );

    const favorite = await this.findById(id);
    await postgres.disconnect(database);

    return favorite;
  }

  async update(
    id: string,
    user_id: string,
    title: string,
    category: string,
    season: number,
    episode: number,
  ): Promise<Favorite> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    await database.query(
      `UPDATE watchlist SET user_id = $2, title = $3, category = $4, season = $5, episode = $6 WHERE id = $1`,
      [id, user_id, title, category, season, episode],
    );

    const favorite = await this.findById(id);
    await postgres.disconnect(database);

    return favorite;
  }

  async delete(id: string): Promise<void> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    await database.query(`DELETE FROM watchlist WHERE id = $1`, [id]);
    await postgres.disconnect(database);
  }
}

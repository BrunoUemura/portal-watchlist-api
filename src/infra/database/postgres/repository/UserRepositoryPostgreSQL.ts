import User from "../../../../core/entity/User";
import UserRepository from "../../../../core/repository/UserRepository";
import Postgres from "../Postgres";

export default class UserRepositoryPostgreSQL implements UserRepository {
  async findById(id: string): Promise<User> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    const { rows }: any = await database.query(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );

    await postgres.disconnect(database);

    if (rows.length === 0) {
      return null;
    }

    return {
      username: rows[0].username,
      email: rows[0].email,
      created_at: rows[0].created_at,
      updated_at: rows[0].updated_at,
    };
  }

  async findByUsername(username: string): Promise<User | null> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    const { rows }: any = await database.query(
      `SELECT * FROM users WHERE username = $1`,
      [username]
    );

    await postgres.disconnect(database);

    if (rows.length === 0) {
      return null;
    }

    return {
      username: rows[0].username,
      email: rows[0].email,
      created_at: rows[0].created_at,
      updated_at: rows[0].updated_at,
    };
  }

  async insert(id: string, username: string, email: string): Promise<User> {
    const postgres = new Postgres();
    const database = await postgres.connect();
    await database.query(
      `INSERT INTO users (id, username, email) VALUES ($1, $2, $3)`,
      [id, username, email]
    );

    const user = await this.findByUsername(username);
    await postgres.disconnect(database);

    return user;
  }
}

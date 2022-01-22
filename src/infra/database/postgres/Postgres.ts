import { Client } from "pg";
import { DatabaseConnectionError } from "../../../shared/error/DatabaseConnectionError";

export default class Postgres {
  async connect() {
    try {
      const client = new Client({
        user: String(process.env.DB_USER),
        host: String(process.env.DB_HOST),
        database: String(process.env.DB_DATABASE),
        password: String(process.env.DB_PASS),
        port: Number(process.env.DB_PORT),
      });
      await client.connect();
      console.log("==> PostgreSQL: OK");
      return client;
    } catch (error) {
      console.log("==> PostgreSQL: Error connecting to database");
      throw new DatabaseConnectionError();
    }
  }

  async disconnect(client: Client) {
    try {
      return await client.end();
    } catch (error) {
      console.log("==> PostgreSQL: Error disconnecting from database");
      throw new DatabaseConnectionError();
    }
  }
}

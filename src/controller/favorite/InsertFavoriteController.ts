import { NextFunction, Request, Response } from "express";
import InsertFavorite from "../../core/usecase/favorite/InsertFavorite";
import FavoriteRepositoryPostgreSQL from "../../infra/database/postgres/repository/FavoriteRepositoryPostgreSQL";
import UserRepositoryPostgreSQL from "../../infra/database/postgres/repository/UserRepositoryPostgreSQL";

export default class InsertFavoriteController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { user_id, title, category, season, episode } = request.body;
      const userRepositoryPostgreSQL = new UserRepositoryPostgreSQL();
      const favoriteRepositoryPostgreSQL = new FavoriteRepositoryPostgreSQL();
      const insertFavorite = new InsertFavorite(
        userRepositoryPostgreSQL,
        favoriteRepositoryPostgreSQL
      );
      const result = await insertFavorite.execute(
        user_id,
        title,
        category,
        season,
        episode
      );
      return response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

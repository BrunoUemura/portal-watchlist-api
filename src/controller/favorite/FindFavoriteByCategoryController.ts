import { NextFunction, Request, Response } from "express";
import FindFavoriteByCategory from "../../core/usecase/favorite/FindFavoriteByCategory";
import FavoriteRepositoryPostgreSQL from "../../infra/database/postgres/repository/FavoriteRepositoryPostgreSQL";

export default class FindFavoriteByCategoryController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { category } = request.params;
      const favoriteRepositoryPostgreSQL = new FavoriteRepositoryPostgreSQL();
      const findFavoriteByCategory = new FindFavoriteByCategory(
        favoriteRepositoryPostgreSQL
      );
      const result = await findFavoriteByCategory.execute(category);
      return response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

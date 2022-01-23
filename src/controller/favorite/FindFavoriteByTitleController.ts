import { NextFunction, Request, Response } from 'express';
import FindFavoriteByTitle from '@src/core/usecase/favorite/FindFavoriteByTitle';
import FavoriteRepositoryPostgreSQL from '@src/infra/database/postgres/repository/FavoriteRepositoryPostgreSQL';

export default class FindFavoriteByTitleController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { title } = request.params;
      const favoriteRepositoryPostgreSQL = new FavoriteRepositoryPostgreSQL();
      const findFavoriteByTitle = new FindFavoriteByTitle(
        favoriteRepositoryPostgreSQL,
      );
      const result = await findFavoriteByTitle.execute(title);
      return response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

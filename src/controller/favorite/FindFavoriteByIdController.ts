import { NextFunction, Request, Response } from 'express';
import FindFavoriteById from '../../core/usecase/favorite/FindFavoriteById';
import FavoriteRepositoryPostgreSQL from '../../infra/database/postgres/repository/FavoriteRepositoryPostgreSQL';

export default class FindFavoriteByIdController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params;
      const favoriteRepositoryPostgreSQL = new FavoriteRepositoryPostgreSQL();
      const findFavoriteById = new FindFavoriteById(
        favoriteRepositoryPostgreSQL,
      );
      const result = await findFavoriteById.execute(id);
      return response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

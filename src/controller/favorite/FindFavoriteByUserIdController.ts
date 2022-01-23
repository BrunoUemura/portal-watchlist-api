import { NextFunction, Request, Response } from 'express';
import FindFavoriteByUserId from '@src/core/usecase/favorite/FindFavoriteByUserId';
import FavoriteRepositoryPostgreSQL from '@src/infra/database/postgres/repository/FavoriteRepositoryPostgreSQL';
import UserRepositoryPostgreSQL from '@src/infra/database/postgres/repository/UserRepositoryPostgreSQL';

export default class FindFavoriteByUserIdController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params;
      const userRepositoryPostgreSQL = new UserRepositoryPostgreSQL();
      const favoriteRepositoryPostgreSQL = new FavoriteRepositoryPostgreSQL();
      const findFavoriteByUserId = new FindFavoriteByUserId(
        userRepositoryPostgreSQL,
        favoriteRepositoryPostgreSQL,
      );
      const result = await findFavoriteByUserId.execute(id);
      return response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

import { NextFunction, Request, Response } from 'express';
import DeleteFavorite from '@src/core/usecase/favorite/DeleteFavorite';
import FavoriteRepositoryPostgreSQL from '@src/infra/database/postgres/repository/FavoriteRepositoryPostgreSQL';

export default class DeleteFavoriteController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params;
      const favoriteRepositoryPostgreSQL = new FavoriteRepositoryPostgreSQL();
      const deleteFavorite = new DeleteFavorite(favoriteRepositoryPostgreSQL);
      const result = await deleteFavorite.execute(id);
      return response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

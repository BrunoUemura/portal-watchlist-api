import { NextFunction, Request, Response } from 'express';
import UpdateFavorite from '../../core/usecase/favorite/UpdateFavorite';
import FavoriteRepositoryPostgreSQL from '../../infra/database/postgres/repository/FavoriteRepositoryPostgreSQL';
import RequestValidation from '../../validation/RequestValidation';

export default class UpdateFavoriteController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await RequestValidation.validate(request);

      const { id } = request.params;
      const { user_id, title, category, season, episode } = request.body;
      const favoriteRepositoryPostgreSQL = new FavoriteRepositoryPostgreSQL();
      const updateFavorite = new UpdateFavorite(favoriteRepositoryPostgreSQL);
      const result = await updateFavorite.execute(
        id,
        user_id,
        title,
        category,
        season,
        episode,
      );
      return response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

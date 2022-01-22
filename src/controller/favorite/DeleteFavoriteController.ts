import { NextFunction, Request, Response } from "express";
import DeleteFavorite from "../../core/usecase/favorite/DeleteFavorite";
import FavoriteRepositoryPostgreSQL from "../../infra/database/postgres/repository/FavoriteRepositoryPostgreSQL";
import AuthValidation from "../../validation/AuthValidation";

export default class DeleteFavoriteController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      await AuthValidation.validate(request, next);

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

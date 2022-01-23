import { Router } from 'express';
import DeleteFavoriteController from '@src/controller/favorite/DeleteFavoriteController';
import FindFavoriteByCategoryController from '@src/controller/favorite/FindFavoriteByCategoryController';
import FindFavoriteByIdController from '@src/controller/favorite/FindFavoriteByIdController';
import FindFavoriteByTitleController from '@src/controller/favorite/FindFavoriteByTitleController';
import FindFavoriteByUserIdController from '@src/controller/favorite/FindFavoriteByUserIdController';
import InsertFavoriteController from '@src/controller/favorite/InsertFavoriteController';
import UpdateFavoriteController from '@src/controller/favorite/UpdateFavoriteController';
import { authMiddleware } from '@src/validation/AuthValidation';

const watchlist = Router();

watchlist.get('/favorite/id/:id', FindFavoriteByIdController.handle);
watchlist.get('/favorite/user/:id', FindFavoriteByUserIdController.handle);
watchlist.get('/favorite/title/:title', FindFavoriteByTitleController.handle);
watchlist.get(
  '/favorite/category/:category',
  FindFavoriteByCategoryController.handle,
);
watchlist.post(
  '/favorite/add',
  authMiddleware,
  InsertFavoriteController.handle,
);
watchlist.put(
  '/favorite/update/:id',
  authMiddleware,
  UpdateFavoriteController.handle,
);
watchlist.delete(
  '/favorite/delete/:id',
  authMiddleware,
  DeleteFavoriteController.handle,
);

export { watchlist };

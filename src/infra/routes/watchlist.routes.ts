import { Router } from "express";
import DeleteFavoriteController from "../../controller/favorite/DeleteFavoriteController";
import FindFavoriteByCategoryController from "../../controller/favorite/FindFavoriteByCategoryController";
import FindFavoriteByIdController from "../../controller/favorite/FindFavoriteByIdController";
import FindFavoriteByTitleController from "../../controller/favorite/FindFavoriteByTitleController";
import FindFavoriteByUserIdController from "../../controller/favorite/FindFavoriteByUserIdController";
import InsertFavoriteController from "../../controller/favorite/InsertFavoriteController";
import UpdateFavoriteController from "../../controller/favorite/UpdateFavoriteController";

const watchlist = Router();

watchlist.get("/favorite/id/:id", FindFavoriteByIdController.handle);
watchlist.get("/favorite/user/:id", FindFavoriteByUserIdController.handle);
watchlist.get("/favorite/title/:title", FindFavoriteByTitleController.handle);
watchlist.get(
  "/favorite/category/:category",
  FindFavoriteByCategoryController.handle
);
watchlist.post("/favorite", InsertFavoriteController.handle);
watchlist.put("/favorite/id/:id", UpdateFavoriteController.handle);
watchlist.delete("/favorite/id/:id", DeleteFavoriteController.handle);

export { watchlist };

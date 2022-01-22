import { NextFunction, Request, Response, Router } from "express";
import { NotFoundError } from "../../shared/error/NotFoundError";
import { watchlist } from "./watchlist.routes";

const routes = Router();

routes.use("/api/v1/watchlist", watchlist);

routes.use((req: Request, _res: Response, next: NextFunction) => {
  if (!req.route) {
    return next(new NotFoundError("Route not found"));
  }
  next();
});

export { routes };

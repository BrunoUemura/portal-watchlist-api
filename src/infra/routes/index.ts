import { NextFunction, Request, Response, Router } from 'express';
import { NotFoundError } from '@src/util/error/NotFoundError';
import { watchlist } from '@src/infra/routes/watchlist.routes';

const routes = Router();

routes.use('/api/v1/watchlist', watchlist);

routes.use((req: Request, _res: Response, next: NextFunction) => {
  if (!req.route) {
    return next(new NotFoundError('Route not found'));
  }
  next();
});

export { routes };

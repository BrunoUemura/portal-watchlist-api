import { Router } from "express";
import { watchlist } from "./watchlist.routes";

const routes = Router();
routes.use("/api/v1/watchlist", watchlist);

export { routes };

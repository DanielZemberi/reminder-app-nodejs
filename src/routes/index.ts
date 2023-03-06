import PostRouter, { POST_ROUTE_BASE_PATH } from "./postRoutes";
import { Router } from "express";

const RouterV1: Router = Router();

RouterV1.use(POST_ROUTE_BASE_PATH, PostRouter);

export default RouterV1;

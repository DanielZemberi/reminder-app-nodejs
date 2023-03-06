import { Router } from "express";
const postController = require("../controllers/postController");

const PostRouter = Router();

export const POST_ROUTE_BASE_PATH = "/posts";

PostRouter.route("/")
  .get(postController.getAllPosts)
  .post(postController.createNewPost);

PostRouter.route("/:id").get(postController.getPostById);

export default PostRouter;

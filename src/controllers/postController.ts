import { NextFunction, Request, Response } from "express";
import postHandler from "../handler/post";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = postHandler.getPosts();
    res.send({ status: 200, data });
  } catch (error) {
    next(error);
  }
};

export const createNewPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("createNewPost");
};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("getPostById");
};

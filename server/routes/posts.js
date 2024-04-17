import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost
} from "../controller/posts.js";

const router = express.Router();

router.post("/", addPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;

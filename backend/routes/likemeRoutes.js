import { Router } from "express";
import {
  createPostController,
  getAllPostController,
} from "../src/controllers/likemeController.js";

const router = Router();

router.get("/posts", getAllPostController);
router.post("/posts", createPostController);

export default router;

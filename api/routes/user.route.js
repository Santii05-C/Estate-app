import express from "express";
import {
  apdateUser,
  deleteUsers,
  getUser,
  getUsers,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", verifyToken, getUser);
router.put("/:id", verifyToken, apdateUser);
router.delete("/:id", verifyToken, deleteUsers);

export default router;

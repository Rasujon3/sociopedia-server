import express from "express";
import { addRemoveFriend } from "../controllers/addremovefriendusers.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

// read
// router.get("/:id", verifyToken, getUser);
// router.get("/:id/friends", verifyToken, getUserFriends);

export default router;

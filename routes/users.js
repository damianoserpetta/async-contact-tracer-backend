import express from "express";

const router = express.Router();

import {
  postUserController,
  patchUserController,
} from "../controllers/user.controller.js";

import {
  getUserService,
  getAllUsersService,
  postUserService,
  deleteUserService,
  putUserService,
  patchUserService,
} from "../services/user.service.js";

// READ
router.get("/", async (req, res) => {
  if (req.query.id) res.send(await getUserService(req.query.id));
  else res.send(await getAllUsersService());
});

// CREATE
router.post("/", postUserController, async (req, res) => {
  res.send(await postUserService(res.userInfo));
});

// PATCH
router.patch("/", patchUserController, async (req, res) => {
  res.send(await patchUserService(res.id, res.update));
});

// DELETE
router.delete("/", async (req, res) => {
  res.send(await deleteUserService(req.query.id));
});

export default router;

import express from "express";

const router = express.Router();

import {
  postContactController,
  patchContactController,
} from "../controllers/contact.controller.js";

import {
  getContactService,
  getAllContactsService,
  postContactService,
  deleteContactService,
  patchContactService,
  getContactsForDevice,
} from "../services/contact.service.js";

// READ
router.get("/", async (req, res) => {
  if (req.query.id) res.send(await getContactService(req.query.id));
  else if (req.query.deviceId)
    res.send(await getContactsForDevice(req.query.deviceId));
  else res.send(await getAllContactsService());
});
// CREATE
router.post("/", postContactController, async (req, res) => {
  res.send(await postContactService(res.contactInfo));
});
// PATCH
router.patch("/", patchContactController, async (req, res) => {
  res.send(await patchContactService(res.id, res.update));
});
// DELETE
router.delete("/", async (req, res) => {
  res.send(await deleteContactService(req.query.id));
});

export default router;

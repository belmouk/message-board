import { Router } from "express";
import * as messagesController from "../controllers/messagesController.js";
import {
  handleValidationErrors,
  validateNewMessageInputs,
} from "../middleware/messageValidator.js";
import { handleErrors } from "../middleware/errorHandler.js";

const router = Router();

router.get("/", messagesController.messagesListGet);

router.get("/new", messagesController.messagesNewGet);
router.post(
  "/new",
  validateNewMessageInputs,
  handleValidationErrors,
  messagesController.messagesNewPost,
);

router.get("/message/:id", messagesController.messagesDetailsGet);

router.use(handleErrors);

export default router;

import { Router } from "express";
import * as db from "../db/queries.js";

const router = Router();

router.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Message Board",
    messages: messages,
  });
});

router
  .route("/new")
  .get((req, res) => {
    res.render("form");
  })
  .post(async (req, res) => {
    const { text, username } = req.body;
    await db.addMessage(username, text);
    res.redirect("/");
  });

router.get("/message/:id", async (req, res) => {
  const messageId = req.params.id;
  const message = await db.getMessage(messageId);
  res.render("message", { title: "Message Board", message: message });
});

export default router;

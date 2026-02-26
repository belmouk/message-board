import * as db from "../db/queries.js";

export const messagesListGet = async (req, res, next) => {
  try {
    const messages = await db.getAllMessages();
    res.render("index", {
      title: "Message Board",
      messages: messages,
    });
  } catch (error) {
    next(error);
  }
};

export const messagesNewGet = (req, res) => {
  res.render("form", { errors: [], oldInput: {} });
};

export const messagesNewPost = async (req, res, next) => {
  try {
    const { text, username } = req.body;
    await db.addMessage(username, text);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

export const messagesDetailsGet = async (req, res, next) => {
  try {
    const messageId = req.params.id;
    const message = await db.getMessage(messageId);
    res.render("message", { title: "Message Board", message: message });
  } catch (error) {
    next(error);
  }
};

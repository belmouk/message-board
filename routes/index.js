import { Router, text } from "express";

const router = Router();

const messages = [
  { id: 1, text: "Hi there", user: "Amando", added: new Date() },
  { id: 2, text: "Hello world", user: "Charles", added: new Date() },
];

let id = 3;

router.get("/", (req, res) => {
  res.render("index", { title: "Message Board", messages: messages });
});

router
  .route("/new")
  .get((req, res) => {
    res.render("form");
  })
  .post((req, res) => {
    const { text, user } = req.body;
    messages.push({
      id,
      text,
      user,
      added: new Date(),
    });
    id++;
    res.redirect("/");
  });
router.get("/message/:id", (req, res) => {
  const message = messages.find(
    (message) => message.id === Number(req.params.id),
  );
  res.render("message", { title: "Message Board", message: message });
});

export default router;

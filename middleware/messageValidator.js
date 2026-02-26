import { body, validationResult } from "express-validator";

export const validateNewMessageInputs = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required.")
    .isAlpha()
    .withMessage("Username can only consist of letters.")
    .isLength({ max: 25 })
    .withMessage("Username must be 25 characters long."),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ max: 250 })
    .withMessage("Text must contain less than 250 characters."),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .render("form", { errors: errors.mapped(), oldInput: req.body });
  }
  next();
};

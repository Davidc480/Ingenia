const { Router } = require("express");
const postUser = require("../controllers/postUser");
const getAuthenticatedUser = require("../controllers/getAuthenticatedUser");

const userRouter = Router();

// Ruta para users
userRouter.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const user = getUser(id);
    res.status(200).send(user);
  } catch (error) {}
});

userRouter.post("/created", (req, res) => {
  try {
    const { name, lastName, password, email } = req.body;
    const user = postUser(name, lastName, password, email);
    res.status(200).send(user);
  } catch (error) {}
});

userRouter.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = getAuthenticatedUser(email, password);
    res.status(200).send(user);
  } catch (error) {}
});

module.exports = userRouter;

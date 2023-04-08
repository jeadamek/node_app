const { Router } = require("express");

const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router();

const userController = new UserController();


usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update)

module.exports = usersRoutes;
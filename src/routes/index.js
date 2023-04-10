const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const movieTagsRouter = require("./movieTags.routes");
const movieRatingsRouter = require("./movieRatings.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/tags", movieTagsRouter);
routes.use("/ratings", movieRatingsRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;
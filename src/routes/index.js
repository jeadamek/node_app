const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const movieTagsRouter = require("./movieTags.routes");
const movieNotesRouter = require("./movieNotes.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/tags", movieTagsRouter);
routes.use("/notes", movieNotesRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;
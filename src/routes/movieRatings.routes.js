const { Router } = require("express");

const MovieRatingsController = require("../controllers/MovieRatingsController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const movieRatingsRoutes = Router();

const movieRatingsController = new MovieRatingsController();

movieRatingsRoutes.use(ensureAuthenticated);

movieRatingsRoutes.get("/", movieRatingsController.index);
movieRatingsRoutes.post("/", movieRatingsController.create);
movieRatingsRoutes.get("/:id", movieRatingsController.show);
movieRatingsRoutes.delete("/:id", movieRatingsController.delete);
// movieRatingsRoutes.put("/:id", movieRatingsRoutes.update);


module.exports = movieRatingsRoutes;
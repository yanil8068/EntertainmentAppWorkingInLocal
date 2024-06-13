const express = require("express");
const {
  trendingMedia,
  movieMedia,
  tvMedia,
} = require("../controllers/media.controllers.js");
const {
  movieDetail,
  tvDetail,
} = require("../controllers/mediaDetail.controllers.js");
const {
  movieImageController,
  tvImageController,
} = require("../controllers/mediaImage.controllers.js");
const {
  findMovieController,
  findTvController,
  findAllController,
} = require("../controllers/mediaSearch.controllers.js");

// router instances
const mediaRouter = express.Router();

// media routes
mediaRouter.get("/media/trending/:page", trendingMedia);
mediaRouter.get("/media/movie/:page", movieMedia);
mediaRouter.get("/media/tv/:page", tvMedia);

// thumbnail image
mediaRouter.get("/media/movie/image/:movieId", movieImageController);
mediaRouter.get("/media/tv/image/:seriesId", tvImageController);

// details of movies and TvShows routes
mediaRouter.get("/media/movie/detail/:movieId", movieDetail);
mediaRouter.get("/media/tv/detail/:seriesId", tvDetail);

//searching movies, Tvshows, and all media routes
mediaRouter.get("/media/movie/search/:searchQuery", findMovieController);
mediaRouter.get("/media/tv/search/:searchQuery", findTvController);
mediaRouter.get("/media/all/search/:searchQuery", findAllController);

// exporting router
module.exports = { mediaRouter };

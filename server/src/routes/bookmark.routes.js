// importing
const express = require("express");
const { checkAuthentication } = require("../middleware/auth.js");
const {
  checkBookmark,
  addBookmark,
  deleteBookmark,
  getBookmark,
  filterBookmark,
} = require("../controllers/bookmark.controllers.js");

// router instances
const bookmarkRouter = express.Router();

//bookmark routes
bookmarkRouter.get(
  "/media/bookmark/check/:id",
  checkAuthentication,
  checkBookmark
);
bookmarkRouter.post("/media/bookmark/add", checkAuthentication, addBookmark);
bookmarkRouter.delete(
  "/media/bookmark/delete/:id",
  checkAuthentication,
  deleteBookmark
);
bookmarkRouter.get("/media/bookmark/get", checkAuthentication, getBookmark);
bookmarkRouter.get(
  "/media/bookmark/search/:searchQuery",
  checkAuthentication,
  filterBookmark
);

// exporting
module.exports = { bookmarkRouter };

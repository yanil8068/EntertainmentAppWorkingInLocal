const express = require("express");
const { checkAuthentication } = require("../middleware/auth.js");
const {
  Register,
  Login,
  Logout,
  userProfile,
  getUserById,
} = require("../controllers/user.controllers.js");

// router instances
const userRouter = express.Router();

// user routes
userRouter.post("/user/register", Register);
userRouter.post("/user/login", Login);
userRouter.get("/user/logout", Logout);
userRouter.get("/user/profile", checkAuthentication, userProfile);
userRouter.get("/user/:id", checkAuthentication, getUserById);

// exporting
module.exports = { userRouter };

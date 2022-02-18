const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
} = require("./user.controller");

router.get("/email/:userid", getUserByEmail);
router.get("/name/:name", getUserByName);
router.get("/address/:address", getUserByAddress);

router.post("/", createUser);
router.get("/all", getUsers);
router.delete("/:id", deleteUser);  
router.patch("/", updateUser);

module.exports = router;

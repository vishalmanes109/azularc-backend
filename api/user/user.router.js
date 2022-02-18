const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
} = require("./user.controller");

router.get("/userid/:userid", getUserById);
router.post("/", createUser);
router.get("/all", getUsers);
router.delete("/:id", deleteUser);  
router.patch("/", updateUser);

module.exports = router;

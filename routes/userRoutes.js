const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/add", userController.createNewUser);
router.get("/", userController.fetchUsers);
router.get("/:id", userController.fetchSingleUser);
router.put("/:id", userController.updateSingleUser);
router.delete("/:id", userController.deleteSingleUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const socialTravelController = require("../controllers/socialTravelController");

router.post("/", socialTravelController.createPost);
router.get("/",socialTravelController.getAllPosts)
router.get("/:id",socialTravelController.getOnePost);
router.patch("/:id",socialTravelController.updatePost);

module.exports = router;

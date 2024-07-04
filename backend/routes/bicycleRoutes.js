const express = require("express");
const router = express.Router();
const BicycleController = require("../controllers/bicycleController");
const upload = require("../middleware/upload");

router.post(
  "/api/bicycles",
  upload.array("images", 12),
  BicycleController.createBicycle
);
router.get("/api/bicycles", BicycleController.getBicycles);
router.get("/api/bicycles/:id", BicycleController.getBicycle);
router.put(
  "/api/bicycles/:id",
  upload.array("images", 12),
  BicycleController.updateBicycle
);
router.delete("/api/bicycles/:id", BicycleController.deleteBicycle);

module.exports = router;

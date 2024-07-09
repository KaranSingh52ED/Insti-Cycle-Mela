const express = require("express");
const router = express.Router();
const BicycleController = require("../controllers/bicycleController");
const upload = require("../middleware/upload");

router.post(
  "/bicycles",
  upload.array("images", 12),
  BicycleController.createBicycle
);
router.get("/bicycles", BicycleController.getBicycles);
router.get("/bicycles/:id", BicycleController.getBicycle);
router.put(
  "/bicycles/:id",
  upload.array("images", 12),
  BicycleController.updateBicycle
);
router.delete("/bicycles/:id", BicycleController.deleteBicycle);

//for test purpose: 
router.post("/add-multiple", BicycleController.addBicycles);

module.exports = router;

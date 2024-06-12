const express = require("express");
const {
  getBicycles,
  createBicycle,
  addBicycles,
} = require("../controllers/bicycleController");

const router = express.Router();

router.get("/bicycles", getBicycles);
router.post("/bicycles", createBicycle);
router.post("/add-multiple", addBicycles);
module.exports = router;

const express = require('express');
const { getBicycles, createBicycle } = require('../controllers/bicycleController');

const router = express.Router();

router.get('/bicycles', getBicycles);
router.post('/bicycles', createBicycle);

module.exports = router;

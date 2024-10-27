// senderRoute.js
const express = require("express");
const router = express.Router();
const { addTraveller, getTraveller } = require('../Controller/TravellerController');

router.post('/', getTraveller);

module.exports = router;

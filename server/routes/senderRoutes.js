// senderRoute.js
const express = require("express");
const router = express.Router();
const { addTraveller, getTraveller } = require('../Controller/TravellerController');

router.get('/', getTraveller);
router.post('/',addTraveller)
module.exports = router;

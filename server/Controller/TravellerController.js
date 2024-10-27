const {Traveller} = require('../models/travellerModel');
const AsyncHandler = require("express-async-handler");
// Controller to add a new traveller
const addTraveller = AsyncHandler(async (req, res) => {
    try {
        const { user, from, to, traveldate } = req.body;

        const newTraveller = {user: user, from: from, to: to, traveldate: traveldate};
        const createTraveller = await Traveller.create({newTraveller})
        res.status(201).json({ traveller: newTraveller, matchingSenders });
    } catch (error) {
        console.error("Error adding traveller:", error);
        res.status(500).json({ message: "Server error", error });
    }
});
const getTraveller = AsyncHandler(async (req, res) => {
    try {
        const {from,to} = req.body;
        // Fetch travellers matching the 'from' and 'to' locations
        const travellers = await Traveller.find({from: from, to:to});
        console.log(travellers);
        if (travellers.length === 0) {
            return res.status(404).json({ message: "No travellers found for the specified route." });
        }
        
        console.log("Done");
        res.status(200).json(travellers);
    } catch (error) {
        console.error("Error fetching travellers:", error);
        res.status(500).json({ message: "Server error", error });
    }
});
module.exports = { addTraveller, getTraveller};

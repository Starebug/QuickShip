const {Traveller} = require('../models/travellerModel');
const AsyncHandler = require("express-async-handler");
// Controller to add a new traveller
const addTraveller = AsyncHandler(async (req, res) => {
    try {
        const { name, from, to, departure } = req.body;
        console.log(name,from,to);
        const newTraveller = { from: from, to: to,user_name: name,traveldate: departure};
        const createTraveller = await Traveller.create(newTraveller)
        res.status(201).json({traveller: newTraveller});
        console.log(createTraveller);
    } catch (error) {
        console.error("Error adding traveller:", error);
        res.status(500).json({ message: "Server error", error });
    }
});
const getTraveller = AsyncHandler(async (req, res) => {
    try {
        // Extract 'from' and 'to' from query parameters
        const { from, to } = req.query;
        console.log(from,to);
        // Ensure 'from' and 'to' are provided
        if (!from || !to) {
            return res.status(400).json({ message: "Missing 'from' or 'to' query parameters." });
        }

        // Fetch travellers matching the 'from' and 'to' locations
        const travellers = await Traveller.find({ from, to });

        // Check if no travellers are found
        if (travellers.length === 0) {
            return res.status(404).json({ message: "No travellers found for the specified route." });
        }

        // Respond with the list of travellers
        res.status(200).json(travellers);
    } catch (error) {
        console.error("Error fetching travellers:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = { addTraveller, getTraveller};

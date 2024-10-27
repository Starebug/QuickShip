const mongoose = require("mongoose");
const {Traveller} = require("../models/travellerModel");
const {connectDB} = require("./connection");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: path.resolve(__dirname, '../.env') });
connectDB();
const traveller_data = require("./MOCK_DATA");
const pushTravelersData = async () => {
    try {
        const result = await Traveller.insertMany(traveller_data);
        console.log("Travelers data inserted:", result);
    } catch (error) {
        console.error("Error inserting data:", error);
    } finally {
        mongoose.connection.close();
        process.exit();
    }
};

// Execute the function
pushTravelersData();
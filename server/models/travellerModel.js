const mongoose = require("mongoose");

const travellerSchema = new mongoose.Schema({
    user_name: {type: String, required:true},
    from:{type: String, required: true},
    to: {type: String, required: true},
    traveldate: {type:Date, default: Date.now ,required:true}
});

const Traveller = mongoose.model("Traveller", travellerSchema);
module.exports = {Traveller};
const mongoose = require("mongoose");

const senderSchema = mongoose.Schema({
    user:{ type: mongoose.Schema.Types.ObjectId,required:true},
    from: {type: String, required: true},
    to: {type: String, required: true},
    product: [{type: mongoose.Schema.Types.ObjectId, required:true}]
});

const Sender = mongoose.model("Sender", senderSchema);
module.exports = Sender;
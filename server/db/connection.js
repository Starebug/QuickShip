const mongoose = require("mongoose");
const connectDB = async() => {
try{
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`MongoDB Connected : ${conn.connection.host}`)
}catch(error) {
    console.log("Connection Error", error);
    process.exit();
}
}
module.exports = {connectDB}
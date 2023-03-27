const mongoose = require("mongoose");

uri ="mongodb+srv://amitjass111:W6difaB2yvPbo4k4@amitapi.s712q0g.mongodb.net/AmitApi?retryWrites=true&w=majority"

const connectDB = () =>{
    console.log("connected database");
    return mongoose.connect(uri, {
       useNewurlParser: true,
       useUnifiedTopology: true, 
    });
};
module.exports = connectDB;
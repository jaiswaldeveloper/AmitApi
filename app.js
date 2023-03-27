const express = require ("express");

const app = express ();

require ("dotenv").config();
const connectDB = require("./db/connect");
const PORT  = process.env.PORT || 5000; 

app.get("/",(req, res)=>{
    res.send ("hi , i am live");
});

const products_routes = require("./routes/products")
//middleware or to set router
app.use("/api/products", products_routes);

const start = async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes i am connected`);
        })
    }catch (error){
        console.log(error);
    }

}

start();
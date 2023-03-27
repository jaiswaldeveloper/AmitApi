const Product = require("../models/product");


const getAllProducts = async (req, res)=>{
    const myProducts = await Product.find({})
    res.status(200).json({myProducts});
};
const getAllProductsTesting = async (req, res)=>{
    const myProducts = await Product.find({})
    res.status(200).json({myProducts });
};

module.exports = {getAllProducts, getAllProductsTesting};



// const getAllProducts = async (req, res)=>{
 
//     res.status(200).json({msg:"i am getAllProducts" });
// };
// const getAllProductsTesting = async (req, res)=>{
//     res.status(200).json({msg:"i am getAllProductsTesting" });
// };

// module.exports = {getAllProducts, getAllProductsTesting};
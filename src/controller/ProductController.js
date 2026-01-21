const productModel=require("../models/ProductModel")

const getProduct=async(req,res)=>{

    const product=await productModel.find()
    res.json({
        message:"Product Fetch Successfully..!!",
        data:product
    })

}

module.exports={
    getProduct
}
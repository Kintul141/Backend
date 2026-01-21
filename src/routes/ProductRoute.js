const router=require("express").Router()

const ProductController=require("../controller/ProductController")

router.get("/products",ProductController.getProduct)

module.exports=router
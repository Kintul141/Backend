const router = require("express").Router()
const userController = require("../controller/UserController")
const validationMiddleware = require("../middleware/zodValidatorSchema")
const userValidation = require("../validationSchema/UserValidationSchema")
const testMiddleware= require("../middleware/TestMiddleware")
const uploadMiddleware=require("../middleware/UploadMiddleware")
// app.get("/users",async(req,res)=>{
//app --->alter-->router
router.get("/users",testMiddleware.testMiddleware, testMiddleware.testMiddleware2,userController.getUsers)
// router.post("/adduser",validationMiddleware(userValidation),userController.addUser)
router.post("/adduser",uploadMiddleware.upload.single("file"),userController.addUser)
router.delete("/user/:id",userController.deleteUser)
//where update is run it will call however url as same as delete one
router.put("/user/:id",userController.updateUser)
router.put("/addhobby/:id",userController.addHobby)
router.put("/removehobby/:id",userController.removeHobby)

module.exports = router
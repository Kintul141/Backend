const router = require("express").Router()
const userController = require("../controller/UserController")
// app.get("/users",async(req,res)=>{
//app --->alter-->router
router.get("/users",userController.getUsers)
router.post("/adduser",userController.addUser)
router.delete("/user/:id",userController.deleteUser)
//where update is run it will call however url as same as delete one
router.put("/user/:id",userController.updateUser)
router.put("/addhobby/:id",userController.addHobby)
router.put("/removehobby/:id",userController.removeHobby)

module.exports = router
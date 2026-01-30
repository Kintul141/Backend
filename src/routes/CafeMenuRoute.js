const router = require("express").Router()
const menuController = require("../controller/CafeMenuController")
router.get("/item", menuController.getItem)
router.post("/addItem",menuController.addItem)
router.put("/updateItem/:id",menuController.updateItem)
module.exports = router
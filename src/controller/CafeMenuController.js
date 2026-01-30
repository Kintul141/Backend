const menuSchema = require("../models/CafeMenuModel")

const getItem = async (req, res) => {
    const items = await menuSchema.find()
    res.json({
        message: "Item fetched Successfully...:>",
        data: items
    })

}

const addItem = async (req, res) => {
    console.log(req.body)
    const items = await menuSchema.create(req.body)
    res.json({
        message: "item added..:>",
        data: items

    })
}

const updateItem = async (req, res) => {
    console.log(req.body)
    const id = req.params.id
    console.log(id)
    const updateItem = await menuSchema.findByIdAndUpdate(id, req.body, { new: true })
    try {
        if (updateItem) {
            res.json({
                message: "item updated..:>",
                data: updateItem
            })
        } else {
            res.json({
                message: "Item not found..!!"
            })
        }
    } catch (err) {
        res.json({
            message: "Error in update user api",
            error: err.message
        })

    }


}

module.exports = {
    getItem, addItem, updateItem
}
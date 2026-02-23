const CarSchema = require('../models/CarScoutModel')

const createCar = async (req, res) => {
    console.log(req.body)
    const car = await CarSchema.create(req.body)
    res.json({
        message: "Car added successfully..:>",
        data: car
    })
}

const getCar = async (req, res) => {
    const cars = await CarSchema.find()
    res.json({
        message: "Car fetched successfully..:>",
        data: cars
    })
}

const deleteCar = async (req, res) => {
    const carId = req.params.id
    await CarSchema.findByIdAndDelete(carId)
    res.json({
        message: "Car deleted successfully..:>"
    })
}

module.exports = {
    createCar, getCar, deleteCar
}
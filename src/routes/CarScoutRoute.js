const router = require('express').Router();
const zodValidationMiddleware = require('../middleware/zodValidatorSchema');
const carController = require('../controller/CarScoutController');
router.post('/addCar', carController.createCar);
router.get('/getCar', carController.getCar);
router.delete('/deleteCar/:id', carController.deleteCar);
module.exports = router;
const router=require('express').Router();
const uploadController=require('../controller/UploadController')
router.post('/uploadFile',uploadController.uploadFile)
module.exports=router;
const multer=require('multer');

const storage=multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

const upload=multer({
    storage:storage,
}).single('file')

const uploadFile=(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.json({
                message:"Error in file upload",
                error:err.message
            })
        }else{
            res.json({
                message:"File uploaded successfully..:>",
                data:req.file
            })
        }
    })
}

module.exports={
    uploadFile
}
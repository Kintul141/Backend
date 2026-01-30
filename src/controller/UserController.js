const userSchema = require("../models/UserModel")

// app.get("/users",async(req,res)=>{

//     //query
//     //db.users.find() ==> userSchema.find()
//     const users = await userSchema.find() // find funcntion will return promise 

//     res.json({
//         message:"user api called...",
//         data:users
//     })
// })

//functions..

const getUsers =async(req,res)=>{


        const users = await userSchema.find()
        res.json({
            message:"user fetched successfully!!",
            data:users
        })
}

const addUser=async(req,res)=>{
    try{
    console.log(req.body)
    const saveUser=await userSchema.create(req.body)
    res.json({
        message:"User Created..",
        data:saveUser
        })
    }catch(err){
        res.json({
            message:"Error in creating user..",
            error:err.message
        })
    }
}

const deleteUser=async(req,res)=>{
    const id = req.params.id
    const deleteUser=await userSchema.findByIdAndDelete(id)
    if(deleteUser){res.json({
        message:"delete api called..",
        data:deleteUser
        
    })}
else{
        res.json({
            message:"User not found..!!"
        })
    }
}

const updateUser=async (req,res)=>{
    const id = req.params.id
    const data = req.body
    try{
    const updatedUser= await userSchema.findByIdAndUpdate(id,req.body,{new:true})

    if(updatedUser){
        res.json({
        message:"update Api Called..!!",
        data:updatedUser
    })
    }
    else{
        res.json({
            message:"User not found..!!"
        })
    }

}catch(err){
    res.json({
        message:"Error in update user api",
        error:err.message
    })    

}}

const addHobby=async(req,res)=>{
    const id = req.params.id
    const hobby = req.body.hobby
    try{
        const existingUser = await userSchema.findById(id)
        
        if(!existingUser){
            return res.json({
                message:"User not found..!!"
            })
        }
        
        if(existingUser.hobbies && existingUser.hobbies.includes(hobby)){
            return res.json({
                message:"Hobby already exists.. trry onther hobby!!"
            })
        }
        
        const user = await userSchema.findByIdAndUpdate(id,
            { $push: { hobbies: hobby } },
            { new: true }
        )
        
        res.json({
            message:"Hobby added successfully..",
            data:user
        })
    }catch(err){
        res.json({
            message:"Error in adding hobby",
            error:err.message
        })
    }
}

const removeHobby=async(req,res)=>{
    const id = req.params.id
    const hobby = req.body.hobby
    try{

        const user = await userSchema.findByIdAndUpdate(id,
            { $pull: { hobbies: hobby } },
            { new: true }
        )
        if(user){
            res.json({
                message:"Hobby removed successfully..",
                data:user
            })
        }else{
            res.json({
                message:"User not found..!!"
            })
        }
    }catch(err){
        res.json({
            message:"Error in removing hobby",
            error:err.message
        })
    }
}

module.exports = {
    getUsers,addUser,deleteUser,updateUser,addHobby,removeHobby
};
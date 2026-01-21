const express = require("express")
//create object | referance of express
const app = express()
//required dbConnection file and get connection here...
const dbConnection = require("./src/utils/dbConnection")
//call dbConnection function
dbConnection.dbConnection()

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const productRoutes=require("./src/routes/ProductRoute")
app.use("/product",productRoutes)


//server create...|| call
//express server api create || node native ---> http
//http --> own... || express create...
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`)
})
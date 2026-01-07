const express = require("express")

const app = express()

const PORT = 3000

app.listen(PORT, () => {
    console.log(`server started  on PORT ${PORT}`)
})


//localhost:3000/test
app.get("/test", (req, res) => {
    console.log("Test api called...")
    res.send("Test api called...")
})




const users = [
    { id: 1, name: "kintul", age: 19 },
    { id: 1, name: "param", age: 11 },
    { id: 1, name: "gaurav", age: 22 }
]
//localhost:3000/users
app.get("/users", (req, res) => {
    res.json({
        message: "Users Api called...",
        data: users

    })
})

console.log("App file Loded...")
const user=require("./user")
const {StudentDetail,year}=require("./students")
console.log(user)
console.log(user.userName)
console.log(user.userAge)

const Emp=require("./emp")
Emp.getEmp()
Emp.saveEmp()

StudentDetail()
console.log(year)

const {getProduct,getPrice}=require("./product")
getProduct("Iphone")
console.log("Your Iphone Price is : ",getPrice())
const zod = require('zod');

const userValidation = zod.object({
    name: zod.string().min(3).max(50),
    age: zod.number().min(1).max(120),
    gender: zod.enum(["male", "female", "other"]),
    hobbies: zod.array(zod.string()).min(1),
    bloodGroup: zod.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
})

module.exports = userValidation
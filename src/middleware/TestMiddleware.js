const testMiddleware = (req, res, next) => {
    const token = req.headers.token
    console.log(token)
    if (token) {
        next()
    } else {
        res.json({ message: "token is required" })
    }
}

const testMiddleware2 = (req, res, next) => {
    const token2 = req.headers.token2
    console.log(token2)
    if (token2) {
        next()
    } else {
        res.json({ message: "token2 is required" })
    }
}

module.exports = { testMiddleware, testMiddleware2 }

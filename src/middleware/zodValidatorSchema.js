const validationMiddleware = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        res.json({ error: error.issues });
    }
};

module.exports = validationMiddleware;
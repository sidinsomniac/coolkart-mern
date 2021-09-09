const logger = require("./logger");

const handleError = (err, req, res, next) => {
    const { statusCode = 500, message = 'Oh No, Something Went Wrong!' } = err;
    if (typeof message === "string") {
        res.status(statusCode).send({
            message: [err]
        });
    } else {
        res.status(statusCode).send(err);
    }
};


const requireToken = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) throw new ExpressError("Bearer token required", 400);
    const token = bearerToken.split("Bearer ")[1];
    if (!token) throw new ExpressError("Token to be provided in correct format", 400);
    const correctToken = jwt.verify(token, SECRET_KEY);
    if (!correctToken) throw new ExpressError("Unauthorized: Invalid token provided", 401);
    next();
};

module.exports = {
    handleError,
    requireToken
};
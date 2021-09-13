const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("./config");

const ExpressError = require("./ExpressError");
const logger = require("./logger");

const handleError = (err, req, res, next) => {
    logger.error(err);
    const { statusCode = 400, message = 'Oh No, Something Went Wrong!' } = err;
    if (typeof message === "string") {
        res.status(statusCode).send({
            message: [err]
        });
    } else {
        res.status(statusCode).send(err);
    }
};

const requireToken = (req, _, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) throw new ExpressError("Bearer token required", 400);
    const token = bearerToken.split("Bearer ")[1];
    if (!token) throw new ExpressError("Token to be provided in correct format", 400);
    const user = jwt.verify(token, SECRET_KEY);
    if (!user?.user) throw new ExpressError("Unauthorized: Invalid token provided", 401);
    req.user = user.user;
    next();
};

const checkAdmin = (req, _, next) => {
    const { role } = req.user;
    if (role !== "admin") throw new ExpressError("Unauthorized to do this action", 401);
    next();
};

module.exports = {
    handleError,
    requireToken,
    checkAdmin
};
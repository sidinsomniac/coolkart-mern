const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/user");
const ExpressError = require("../utils/ExpressError");
const { SECRET_KEY } = require("../utils/config");
const { mapExpressValidatorResult } = require("../utils/validator");

module.exports.register = async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.errors?.length) {
        throw new ExpressError(mapExpressValidatorResult(errors));
    }

    const { body: { username, email, password } } = req;

    const foundUser = await User.findOne({ username });
    if (foundUser) throw new ExpressError("Username already exists");

    const newUser = new User({
        username,
        email,
        password
    });
    await newUser.save();
    res.status(201).json({
        message: "User created successfully"
    });
};

module.exports.login = async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.errors?.length) {
        throw new ExpressError(mapExpressValidatorResult(errors));
    }

    const { body: { username, password } } = req;
    const foundUser = await User.findOne({ username });
    if (!foundUser) throw new ExpressError("No such user found", 404);
    if (!foundUser.authenticate(password)) throw new ExpressError("Either username or password is incorrect", 401);

    const id = {
        id: foundUser._id,
    };

    const token = jwt.sign({ ...id }, SECRET_KEY, { expiresIn: "1h" });

    const user = {
        username: foundUser.username,
        role: foundUser.role,
        email: foundUser.email,
        ...id
    };

    res.status(200).json({ user, token });
};
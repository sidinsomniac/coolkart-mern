const User = require("../models/user");
const ExpressError = require("../utils/ExpressError");

module.exports.register = async (req, res, next) => {
    const { body: { username, email, password } } = req;
    const newUser = new User({
        username,
        email,
        password
    });
    await newUser.save();
    res.status(201).json(newUser);
};

module.exports.login = async (req, res, next) => {
    const { body: { username } } = req;
    const foundUser = await User.findOne({ username });
    if (!foundUser) {
        throw new ExpressError("Either username or password is incorrect");
    } else {
        res.status(201).json(foundUser);
    }
};
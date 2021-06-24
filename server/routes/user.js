const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");
const catchAsyncError = require("../utils/catchAsyncError");

const User = require("../models/user");

router.post("/login", (req, res) => {
    res.send("login");
});

router.post("/register", catchAsyncError(
    async (req, res, next) => {
        const { body: { username, email, password } } = req;
        const newUser = new User({
            username,
            email,
            password
        });
        res.json(newUser);
        // await newUser.save();
        // logger.info("New user created", newUser);
        // res.status(201).json(newUser);
    }
));


module.exports = router;
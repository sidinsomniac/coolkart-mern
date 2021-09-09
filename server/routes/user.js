const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/auth");

const catchAsyncError = require("../utils/catchAsyncError");
const { validateRegisterBody, validateLoginBody } = require("../utils/validator");

router.post("/login", validateLoginBody, catchAsyncError(login));

router.post("/register", validateRegisterBody, catchAsyncError(register));

module.exports = router;
const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/admin-auth");

const catchAsyncError = require("../utils/catchAsyncError");
const { validateRegisterBody, validateLoginBody, isRequestValidated } = require("../utils/validator");

router.post("/login", validateLoginBody, isRequestValidated, catchAsyncError(login));

router.post("/register", validateRegisterBody, isRequestValidated, catchAsyncError(register));

module.exports = router;
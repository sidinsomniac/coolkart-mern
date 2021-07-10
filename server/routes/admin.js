const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/admin-auth");

const catchAsyncError = require("../utils/catchAsyncError");

router.post("/login", catchAsyncError(login));

router.post("/register", catchAsyncError(register));

module.exports = router;
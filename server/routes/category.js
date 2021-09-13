const router = require('express').Router();
const { createCategory, getCategories } = require("../controllers/category");

const catchAsyncError = require("../utils/catchAsyncError");
const { requireToken, checkAdmin } = require("../utils/middleware");

router.route("/")
    .get(catchAsyncError(getCategories))
    .post(requireToken, checkAdmin, catchAsyncError(createCategory));

module.exports = router;
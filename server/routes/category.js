const router = require('express').Router();
const { createCategory, getCategories } = require("../controllers/category");

const catchAsyncError = require("../utils/catchAsyncError");
const { requireToken, checkAdmin } = require("../utils/middleware");

router.get("/", catchAsyncError(getCategories));

router.post("/create", requireToken, checkAdmin, catchAsyncError(createCategory));

module.exports = router;
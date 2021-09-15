const router = require('express').Router();
const multer = require('multer');
const { categoryStorage } = require("../cloudinary");
const upload = multer({ storage: categoryStorage });

const { createCategory, getCategories } = require("../controllers/category");

const catchAsyncError = require("../utils/catchAsyncError");
const { requireToken, checkAdmin } = require("../utils/middleware");

router.route("/")
    .get(catchAsyncError(getCategories))
    .post(requireToken, checkAdmin, upload.single("categoryImage"), catchAsyncError(createCategory));

module.exports = router;
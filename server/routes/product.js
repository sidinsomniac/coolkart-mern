const router = require('express').Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const { createProduct, getProducts } = require("../controllers/product");

const catchAsyncError = require("../utils/catchAsyncError");
const { requireToken, checkAdmin } = require("../utils/middleware");

router.route("/")
    .get(catchAsyncError(getProducts))
    .post(requireToken, checkAdmin, upload.single("productPhoto"), catchAsyncError(createProduct));

module.exports = router;
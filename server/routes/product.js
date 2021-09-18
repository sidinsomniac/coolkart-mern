const router = require('express').Router();
const multer = require('multer');
const { productStorage } = require('../cloudinary');
const upload = multer({ storage: productStorage });

const { createProduct, getProducts } = require("../controllers/product");

const catchAsyncError = require("../utils/catchAsyncError");
const { requireToken, checkAdmin } = require("../utils/middleware");
const { validateProductBody, isRequestValidated } = require("../utils/validator");

router.route("/")
    .get(catchAsyncError(getProducts))
    .post(requireToken, checkAdmin, upload.single("productPhoto"), validateProductBody, isRequestValidated, catchAsyncError(createProduct));

module.exports = router;
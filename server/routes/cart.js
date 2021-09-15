const router = require('express').Router();
const { addItemToCart, getCartItems } = require("../controllers/cart");

const catchAsyncError = require("../utils/catchAsyncError");
const { requireToken } = require("../utils/middleware");

router.route("/")
    .get(catchAsyncError(getCartItems))
    .post(requireToken, catchAsyncError(addItemToCart));

module.exports = router;
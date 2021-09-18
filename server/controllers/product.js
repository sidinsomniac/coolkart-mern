const slugify = require("slugify");
const Product = require("../models/product");
const ExpressError = require("../utils/ExpressError");

module.exports.createProduct = async (req, res) => {
    const { body: {
        name,
        price,
        description,
        quantity,
        category
    } } = req;
    const productPhoto = req.file?.path;
    if (!productPhoto) throw new ExpressError("A product image is required");
    const newProduct = new Product(
        {
            name,
            slug: slugify(name),
            price,
            description,
            quantity,
            category,
            productPhoto,
            createdBy: req.user.id
        }
    );
    await newProduct.save();
    res.status(200).json("Product saved successfully");
};

module.exports.getProducts = async (req, res) => {
    const products = await Product.find({}).populate(["category", "createdBy"]);
    res.status(200).json(products);
};
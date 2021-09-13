const slugify = require("slugify");
const Product = require("../models/product");

module.exports.createProduct = async (req, res) => {
    const { body: {
        name,
        price,
        description,
        quantity,
        category
    }, file: { path: productPhoto } } = req;
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
    res.status(200).json(newProduct);
};

module.exports.getProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
};
const Cart = require("../models/cart");

module.exports.addItemToCart = async (req, res) => {
    const { body: { cartItem }, user } = req;
    const cartAdded = await Cart.findOne({ user: user.id });
    if (cartAdded) {
        const { cartItems } = cartAdded;
        const itemRepeated = cartItems.find(item => item.product.toString() === cartItem.product);
        if (itemRepeated) {
            await Cart.findOneAndUpdate({ "user": user.id, "cartItems.product": cartItem.product }, {
                "$set": {
                    "cartItems.$": {
                        ...cartItem,
                        quantity: itemRepeated.quantity + cartItem.quantity
                    }
                }
            });
            res.status(200).send("Product item updated");
        } else {
            await Cart.findOneAndUpdate({ user: user.id }, {
                "$push": {
                    "cartItems": cartItem
                }
            });
            res.status(200).send("Product item added");
        }
    } else {
        const cart = new Cart({
            user: user.id,
            cartItems: [
                cartItem
            ]
        });
        await cart.save();
        res.status(200).json("New cart added");
    }
};

module.exports.getCartItems = async (req, res) => {
    res.send("Routes working");
};
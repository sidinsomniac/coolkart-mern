const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    productPhoto: String,
    reviews: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            },
            review: String,
            rating: Number
        }
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = model("Product", productSchema);
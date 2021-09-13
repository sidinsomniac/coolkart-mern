const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
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
    parentId: String
}, {
    timestamps: true
});

module.exports = model("Category", categorySchema);
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "admin"
    }
}, { timestamps: true });

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

userSchema.virtual("password").set(function (password) {
    this.passwordHash = bcrypt.hashSync(password, 12);
});

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.passwordHash);
    }
};

module.exports = model("User", userSchema);
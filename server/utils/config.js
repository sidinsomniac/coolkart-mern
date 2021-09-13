require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET_KEY = process.env.SECRET_KEY;
CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;

module.exports = {
    PORT,
    MONGODB_URI,
    SECRET_KEY,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_KEY,
    CLOUDINARY_SECRET
};
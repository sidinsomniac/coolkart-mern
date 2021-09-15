const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = require("../utils/config");

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET
});

const baseStorageInstance = {
    cloudinary,
    params: {
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
};

const productStorage = new CloudinaryStorage({
    ...baseStorageInstance,
    params: {
        folder: 'Coolkart/products'
    }
});

const categoryStorage = new CloudinaryStorage({
    ...baseStorageInstance,
    params: {
        folder: 'Coolkart/categories',
    }
});

module.exports = {
    cloudinary,
    productStorage,
    categoryStorage
};
const { check, validationResult } = require("express-validator");
const ExpressError = require("./ExpressError");

const validateRegisterBody = [
    check('username')
        .isLength({ min: 5 })
        .withMessage('Username cannot be lesser than 5 characters'),
    check('email')
        .isEmail()
        .withMessage('Email format to be maintained'),
    check('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 chars long')
        .matches(/\d/)
        .withMessage('Password must contain a number')
];

const validateLoginBody = [
    check('username')
        .notEmpty()
        .withMessage('Username cannot be empty'),
    check('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
];

const validateProductBody = [
    check("name")
        .notEmpty()
        .withMessage('Product name cannot be empty'),
    check("price")
        .notEmpty()
        .isInt({ min: 1 })
        .withMessage('Price has to be minimum 1 unit'),
    check("description")
        .notEmpty()
        .withMessage('Description cannot be left empty')
        .isLength({ max: 1000 })
        .withMessage('Description cannot exceed 1000 characters'),
    check("quantity")
        .notEmpty()
        .isInt({ min: 1 })
        .withMessage('Quantity has to be minimum 1 unit'),
    check("category")
        .notEmpty()
        .withMessage('Product has to come under some category')
];

const mapExpressValidatorResult = validatedArray => {
    const expressError = {
        message: "",
        statusCode: 401
    };
    const errorArray = {
        errors: validatedArray.errors.map(error => {
            const newError = { ...expressError };
            newError.message = error.msg;
            return newError;
        })
    };
    validatedArray.errors.forEach(error => {
        errorArray[error.param] = error.msg;
    });
    return errorArray;
};

const isRequestValidated = (req, _, next) => {
    const errors = validationResult(req);
    if (errors.errors?.length) {
        throw new ExpressError(mapExpressValidatorResult(errors));
    } else next();
};

module.exports = {
    validateRegisterBody,
    validateLoginBody,
    validateProductBody,
    isRequestValidated,
    mapExpressValidatorResult
};
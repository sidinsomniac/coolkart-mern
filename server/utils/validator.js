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
        .notEmpty(),
    check('password')
        .notEmpty()
];

const validateProductBody = [
    check("name")
        .notEmpty(),
    check("price")
        .notEmpty()
        .isInt({ min: 1 }),
    check("description")
        .notEmpty()
        .isLength({ max: 1000 }),
    check("quantity")
        .notEmpty()
        .isNumeric(),
    check("category")
        .notEmpty(),
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
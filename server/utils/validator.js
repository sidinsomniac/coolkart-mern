const { check } = require("express-validator");

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
        .withMessage('must contain a number')
];

const validateLoginBody = [
    check('username')
        .notEmpty(),
    check('password')
        .notEmpty()
];

const mapExpressValidatorResult = validatedArray => {
    const expressError = {
        message: "",
        statusCode: 401
    };
    const errorArray = validatedArray.errors.map(error => {
        const newError = { ...expressError };
        newError.message = `${error.param}: ${error.msg}`;
        return newError;
    });
    return errorArray;
};

module.exports = {
    validateRegisterBody,
    validateLoginBody,
    mapExpressValidatorResult
};
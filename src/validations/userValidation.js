const { body, param, validationResult } = require('express-validator');

const validateUser = [
    body('name').isString().withMessage('Name should be a string'),
    body('age').isInt({ min: 0 }).withMessage('Age should be a non-negative integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateUserId = [
    param('id').isMongoId().withMessage('Invalid user ID'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateUser,
    validateUserId
};

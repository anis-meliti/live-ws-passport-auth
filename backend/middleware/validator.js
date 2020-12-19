const { check, validationResult } = require('express-validator');

exports.contactRules = () => [
  check(`name`, `this field is required ! `).notEmpty(),
  check(`email`, ` this field is required!`).notEmpty(),
  check('email', `this field should be a valid email`).isEmail(),
  check(`phoneNumber`, ` this field should have at least 8 number`).isLength({
    min: 8,
    max: 13,
  }),
];
exports.userRules = () => [
  check(`email`, `this field is required`).notEmpty(),
  check(`email`, `this field is required`).isEmail(),
  check(`password`, ` this field is required `).isLength({ min: 4 }),
];
exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.json(errors.array());
};

const { check, body, validationResult } = require('express-validator')


const validator = (validations) => async (req,res,next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }


    res.status(400).json({ errors: errors.array()});

  }

module.exports = {

    createUser: validator([check('password')
        .isLength({min: 7, max: 42})
        .withMessage('Password needs to be between 7 and 42 characters long')])

    // password: (req, res, next)=>{
    //     body('password').isLength({ min: 5 })
    //     const errors = validationResult(req)
    //     if(!errors.isEmpty()){
    //         return res.status(400).json({ errors: errors.array() })
    //     }
    //     next()
    // }

}
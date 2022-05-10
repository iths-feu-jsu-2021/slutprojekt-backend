const { check, body, validationResult } = require('express-validator');
const {User} = require('../models');
const errors = require('../middlewares/errorHandeling')


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

    createMatter: validator([
       check('title')
        .exists()
        .withMessage('Please supply a title'),
       check('content')
         .exists()
         .withMessage('Please supply a description of the matter'),
       check('customerId')
          .exists()
          .withMessage('Please supply the ID of concerned customer')
    ]),

     createUser: validator([
       check('password')
         .isLength({min: 7, max: 42})
         .withMessage('Password needs to be between 7 and 42 characters long'),
       check('role')
         .isIn(['worker', 'customer', 'admin']),
       check('username')
          .exists()
          .withMessage('Please supply a username'),
        check('email')
           .isEmail()
           .withMessage('Invalid email format')
       ])


 }

      //role, username, password, email


      //async(req, res, next)=>{
    //   const {email} = req.body
    //   const user = await User.findOne({where: {email}})
    //   if(user){
    //     errors.emailInUse(req, res, next)
    //     //throw new Error('This email is already registered.')

    //   }

    // password: (req, res, next)=>{
    //     body('password').isLength({ min: 5 })
    //     const errors = validationResult(req)
    //     if(!errors.isEmpty()){
    //         return res.status(400).json({ errors: errors.array() })
    //     }
    //     next()
    // }


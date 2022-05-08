const { body, validationResult } = require('express-validator')


module.exports = {

    password: (req, res, next)=>{
        console.log('validations/index. body password är:')
        console.log(body('password'))

        next()
    }

}

const {BaseError} = require('sequelize')
const {authError} = require('../errors')

module.exports = {

    // emailInUse: (error, req, res, next) => {
    //     const {email} = req.body
    //     res.json(`Email adress: ${email} is already in use`)
    // },
    errorHandler: (error, req, res, next) => {
    // if(error instanceof HTTPException){
    // console.error(req.method, req.path, error.status, error.message)
    // res
    // .status(error.code)
    // .json({error: error.message})
    // }
    if(error instanceof BaseError){
        res
        .status(400)
        .json({error: error.message})
    }else if(error instanceof SyntaxError){
      res
        .status(400)
        .json({error: "Incorrect json"})
    }else{
      console.error(error)
      res
        .status(500)
        .json({error: 'An error occured'})
    }
    if(error instanceof authError){
        console.log('Message: ' + error.message + 'Status: ' + error.errorCode )
    }


    next()
   },
//    requestHandler: (error, req, res, next) => {
//     if(!req.header('Authorization')){
//     throw new HTTPException(401, "Missing access token")
//     }
//     next()
//     },
//     unauthorized: (error, req, res, next) => {
//         res.json('Du är inte auktoriserad för att göra detta. Error är: ' + error)
//     }
}
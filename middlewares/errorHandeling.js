
module.exports = {

    emailInUse: (req, res, next) => {
        const {email} = req.body
        res.json(`Email adress: ${email} is already in use`)
    },
    errorHandler: (error, req, res, next) => {
    if(error instanceof HTTPException){
    console.error(req.method, req.path, error.status, error.message)
    res
    .status(error.code)
    .json({error: error.message})
    }
    next()
   },
   requestHandler: (req,res, next) => {
    if(!req.header('Authorization')){
    throw new HTTPException(401, "Missing access token")
    }
    next()
    },
    unauthorized: (req, res)=>{
        res.json('Du är inte auktoriserad för att göra detta')
    }
}
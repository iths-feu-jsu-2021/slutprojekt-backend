
module.exports = {
errorHandler: (error, req, res, next) => {
    if(error instanceof HTTPException){
    console.error(req.method, req.path, error.status, error.message)
    res
    .status(error.code)
    .json({error: error.message})
    }
    next()
   },
   requestHandler: (req,res) => {
    if(!req.header('Authorization')){
    throw new HTTPException(401, "Missing access token")
    }
    next()
    }
}
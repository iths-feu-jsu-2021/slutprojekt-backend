const { errorHandler } = require("../../middlewares/errorHandeling")

function test(req, res, next){
    try{
        nextMiddleware(req,res,next)
    }catch(error){
        errorHandler(error, req,res,next)
    }
}


test("sdfgh")
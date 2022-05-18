class authError extends Error{

    constructor(){
        super()
        this.message = 'Unauthorized'
        this.errorCode = 401
    }

}


module.exports = { authError }
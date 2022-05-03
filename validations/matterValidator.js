

module.exports = {
    checkRole: async(req, res, next)=>{
        const {role} = req.body
        console.log(role)
        if(role != 'worker'){
            console.log('User is not worker')
            res.json('Unauthorized')
        }
        else{
            console.log('User is worker')
            next()
        }
    }
}
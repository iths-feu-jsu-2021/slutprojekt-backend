const jwt = require('jsonwebtoken')

module.exports = {
    checkIfWorker: async(req, res, next)=>{
        try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const user = jwt.verify(token, process.env.JWT_SECRET)
        if(user.role === 'worker'){
            req.body.workerId = user.id
            next()
        }

        } catch(err) {
            console.log(err)
        }
        // const {role} = req.body
        // console.log(role)
        // if(role != 'worker'){
            //     console.log('User is not worker')
            //     res.json('Unauthorized')
            // }
            // else{
                //     console.log('User is worker')
                //     next()
                // }
            },
            checkIfAdmin: async(req, res, next)=>{
                try{
                    const token = req.header('Authorization').replace('Bearer ', '')
                    const user = jwt.verify(token, process.env.JWT_SECRET)
                    if(user.role === 'admin'){
                        req.body.adminId = user.id
                        next()
                    }
                }catch(err){
                    console.log('Error är: ' + err)
                }
            }
        }
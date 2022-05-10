const jwt = require('jsonwebtoken')
const errorHandeling = require('./errorHandeling')


module.exports = {

    setRole: async(req, res, next)=>{
        try {
            const token = req.header('Authorization').replace('Bearer ', '')
            const user = jwt.verify(token, process.env.JWT_SECRET)
            req.user = user
            next()
            } catch(err) {
                console.log(err)
            }
    },

    checkIfWorker: async(req, res, next)=>{
        try {
            if(req.user.role === 'worker'){
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
                try {
                    if(req.user.role === 'admin'){
                        next()
                    }else{
                        errorHandeling.unauthorized(req, res)
                    }
                } catch(err) {
                    console.log(err)
                }
            },
            checkIfAdminOrWorker: async(req, res, next)=>{
                try {
                    if(req.user.role === 'admin' || req.user.role === 'worker'){
                        next()
                    }else{
                        errorHandeling.unauthorized(req, res)
                    }
                } catch(err) {
                    console.log(err)
                }
            }
        }
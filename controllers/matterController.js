const {Matter} = require('../models')
const user = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
    create: async (req, res) =>{
        const {title, content, customerId, workerId} = req.body
        try{
            await Matter.create({title, content, customerId, workerId})
            res.json('Matter was created')
        }
        catch(err){
            console.log('Error är: ' + err)
        }
    },

    getAll: async(req, res)=>{
        //user.id = req.header
        try{
            const token = req.header('Authorization').replace('Bearer ', '')
            const user = jwt.verify(token, process.env.JWT_SECRET)
            const matters = await Matter.findAll({where: {WorkerId: user.id}} || {where: {CustomerId: user.id}} )
            console.log(matters)
        }
        catch(err){
            console.log(err)
        }
    }
}
const {Matter} = require('../models')
const user = require('../models/user')
// const jwt = require('jsonwebtoken')

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
            const matters = await Matter.findAll({where: {workerId: user.id}} || {where: {customerId: user.id}} )
            res.json(matters)
        }
        catch(err){
            console.log(err)
        }
    },

    update: async(req, res)=>{
        try {
            const {matterId, status, workerId} = req.body
            const matter = await Matter.findOne({where: {id: matterId}})
            if(matter.status != status && status != ''){
                await matter.update({
                    status: status
                })
            }
            if(matter.workerId != workerId && workerId != ''){
                await matter.update({
                    workerId: workerId
                })
            }
            res.json('Matter updated')
        }catch(err){
            console.log(err)
        }
    }

}
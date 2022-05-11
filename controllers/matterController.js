const {Matter, Image} = require('../models')
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
            const img = req.file
            console.log(img)
            const matter = await Matter.findOne({where: {id: matterId}})
            if(matter.status != status && status != ''){
                await matter.update({
                    status: status
                })
            }
            if( req.user.role === 'admin' && matter.workerId != workerId && workerId != ''){
                await matter.update({
                    workerId: workerId
                })
            }
            if (img) {
                await Image.upload(img)
            }
            res.json('Matter updated')
        }catch(err){
            console.log(err)
        }
    }

}
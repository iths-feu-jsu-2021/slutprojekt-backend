const {Matter, Image} = require('../models')
const {Op} = require('sequelize')
// const jwt = require('jsonwebtoken')

module.exports = {
    create: async (req, res) =>{

        const {title, content, customerId} = req.body
        const workerId = req.user.id
        try{
            await Matter.create({title, content, customerId, workerId})
            res.json('Matter was created')
        }
        catch(err){
            console.log('Error är: ' + err)
        }
    },

    getAll: async(req, res, next)=>{
        //user.id = req.header
        const {id} = req.user
        try{
            const matters = await Matter.findAll({where: { [Op.or]: [{workerId: id}, {customerId: id}]}})
           console.log(matters)
            res.json({matters})
        }
        catch(err){
            next(err)
        }
    },

    getOne: async(req, res)=>{
        const id = req.params.id
        try{
            const matter = await Matter.findByPk(id)
            const images = await Image.findAll({where: {matterId: matter.id}})
            const responseObject = { matter, images }
            res.send(responseObject)
        }catch(err){
         next(err)
        }
    },

    update: async(req, res)=>{
        try {
            const {matterId, status, workerId} = req.body
            // const img = req.fil
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
            // if (img) {
            //     await Image.upload(img)
            // }
            res.json('Matter updated')
        }catch(err){
            console.log(err)
        }
    },
}
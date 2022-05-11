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

    getOne: async(req, res)=>{
        const id = req.params.id
        try{
            const matter = await Matter.findByPk(id)
            const images = await Image.findAll({where: {matterId: matter.id}})
            const responseObject = { matter, images }
            res.send(responseObject)
        }catch(err){
            console.log('MatterController GetOneError är: ' + err)
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

    uploadImg: async(req, res)=>{
        try{
            //console.log('req.file är: ' + req.file)
            const userId = req.user.id
            const matterId = req.params.id
            console.log(req.file)
            const image = await Image.create({path: req.file.path, matterId: matterId, userId: userId })
            res.json('File uploaded!')
        }catch(err){
            console.log('MatterControllerError är ' + err)
        }

    }

}
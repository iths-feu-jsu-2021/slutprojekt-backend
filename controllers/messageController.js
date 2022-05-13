const {Message} = require('../models')
module.exports = {
    create: async (req, res) =>{
        try{
            const {title, content} = req.body
            const matterId = req.params.id
            const senderId = req.user.id
            await Message.create({title, content, senderId, matterId})
            res.json('Message was created')
        }
        catch(err){
            console.log('messageControllerError är: ' + err)
        }
    },

    getAll: async (req, res, next)=>{
        try{
            const id = req.params.id
            const messages = await Message.findAll({where: {matterId: id}})
            res.json({messages})
        }catch(err){
            next(err)
        }
    }
}
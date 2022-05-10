const {Message} = require('../models')
const jwt = require('jsonwebtoken')
module.exports = {
    create: async (req, res) =>{
        const {title, content, img, matterId} = req.body
        try{
            const token = req.header('Authorization').replace('Bearer ', '')
            const user = jwt.verify(token, process.env.JWT_SECRET)
            const senderId = user.id
            await Message.create({title, content, img, senderId, matterId})
            res.json('Message was created')
        }
        catch(err){
            console.log('messageControllerError är: ' + err)
        }
    }
}
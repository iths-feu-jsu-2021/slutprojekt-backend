const {Message} = require('../models')
module.exports = {
    create: async (req, res) =>{
        const {title, content, matterId} = req.body
        try{
            const senderId = req.user.id
            await Message.create({title, content, senderId, matterId})
            res.json('Message was created')
        }
        catch(err){
            console.log('messageControllerError är: ' + err)
        }
    }
}
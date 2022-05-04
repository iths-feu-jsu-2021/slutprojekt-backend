const {Message} = require('../models')

module.exports = {
    create: async (req, res) =>{
        const {title, content, img} = req.body
        try{
            await Message.create({title, content, img})
            res.json('Message was created')
        }
        catch(err){
            console.log('Error är: ' + err)
        }
    }
}
const {Message} = require('../models')

module.exports = {
    create: async (req, res) =>{
        const {title, content, matter} = req.body
        try{
            await Message.create({title, content, matter})
            res.json('Matter was created')
        }
        catch(err){
            console.log('Error är: ' + err)
        }
    }
}
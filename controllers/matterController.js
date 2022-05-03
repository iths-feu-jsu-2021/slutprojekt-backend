const {Matter} = require('../models')

module.exports = {
    create: async (req, res) =>{
        const {title, content} = req.body
        try{
            await Matter.create({title, content})
            res.json('Matter was created')
        }
        catch(err){
            console.log('Error är: ' + err)
        }
    }
}
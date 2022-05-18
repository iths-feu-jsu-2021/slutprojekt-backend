// const User = require('../models/User.js')
const {User} = require('../models')

module.exports = {

    create: async (req, res) => {

        const username = req.body.username
        const password = req.body.password
        const role = req.body.role
        try{
            await User.create({username, password, role})
            res.json('User created')
        }
        catch(err){
            next(err)
        }
    },

    login: async(req, res) =>{
        const {username, password} = req.body
        const token = await User.authenticate(username, password)
        res.json({token})

    }
}
const User = require('../models/User')

module.exports = {

    create: async (req, res) => {
        const username = req.body.username
        const password = req.body.password
        const role = req.body.role
        User.create({username, password, role})
        res.json('User created')
    },

    login: async(req, res) =>{
        const {username, password} = req.body
        const token = await User.authenticate(username, password)
        res.json({token})

    }
}
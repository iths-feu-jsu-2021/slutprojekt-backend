const res = require('express/lib/response')
const {User} = require('../models')
const user = require('../models/user')

module.exports = {
    createUser: async(req, res)=>{
        try{
            const {role, username, password} = req.body
            const user = await User.create({role, username, password})
            res.json('User created: ' + user)
        }catch(err){
            console.log('AdminControllerError är ' + err)
        }
    },

    getAllUsers: async(req, res)=>{
        const users = await User.findAll({})
        const listOfUsers = []
        users.forEach(user => {
            listOfUsers.push({id: user.dataValues.id, name: user.dataValues.username})
        })
        res.json(listOfUsers)
    },

    updateUser: async(req, res)=>{
        try{
            const {id, username, password, role} = req.body
            const user = await User.findByPk(id)
            if(user.username != username){
                await user.update({
                    username: username
                })
            }
            if(user.password != password){
                await user.update({
                    password: password
                })
            }
            if(user.role != role){
                await user.update({
                    role: role
                })
            }
            res.json('User updated')
        }catch(err){
            console.log('adminControllerError är : ' + err)
        }
    }

}
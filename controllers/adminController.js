const res = require('express/lib/response')
const { errorHandler } = require('../middlewares/errorHandeling')
const {User} = require('../models')
// const user = require('../models/user')

module.exports = {
    createUser: async(req, res)=>{

            try{
                const {role, username, password, email} = req.body
                const user = await User.create({role, username, password, email})
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
            const {id, username, password, role, email} = req.body
            const user = await User.findByPk(id)
            if(password != ''){
               const newPassword = await User.changePassword(password, id)
               await user.update({
                   password: newPassword
               })
            }
            if(user.username != username && username != ''){
                await user.update({
                    username: username
                })
            }
            if(user.role != role  && role != ''){
                await user.update({
                    role: role
                })
            }
            if(user.email != email  && email != ''){
                await user.update({
                    email: email
                })
            }
            res.json('User updated')
        }catch(err){
            console.log('adminControllerError är : ' + err)
        }
    }

}
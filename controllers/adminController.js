module.exports = {
    createUser: async(req, res)=>{
        try{
            const {role, username, password} = req.body
            const user = await User.create({role, username, password})
            res.json('User created: ' + user)
        }catch(err){
            console.log('Error är ' + err)
        }
    }
}
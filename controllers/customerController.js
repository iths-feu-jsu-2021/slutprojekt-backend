const {User} = require("../models")

module.exports = {
    getAll: async(req, res, next)=>{
        const customers = await User.findAll({where: {role: 'customer'}})
        req.body.customers = customers
        res.json(req.body.customers)
    }
}
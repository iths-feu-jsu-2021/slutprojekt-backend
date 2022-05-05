const {User} = require("../models")

module.exports = {
    getAll: async(req, res, next)=>{
        const customers = await User.findAll({where: {role: 'customer'}})
        console.log(customers)
       const listOfCustomers = []
        customers.forEach(customer => {
            listOfCustomers.push({id: customer.dataValues.id, name: customer.dataValues.username})
        })
        res.json(listOfCustomers)
        next()
    }
}
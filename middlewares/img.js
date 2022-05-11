
const {Matter} = require('../models')
module.exports = {
    upload: async (req, res, next) => {
        const matter = await Matter.findByPk(req.params.id)
        if (req.user.id === matter.workerId || req.user.id === matter.custumerId || req.user.role === 'admin'){
            req.matter = matter
        }
        next()
    }
}
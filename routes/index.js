const accountController = require('../controllers/accountController')
const matterController = require('../controllers/matterController')
const matterValidator = require('../validations/matterValidator')
const { Router } = require('express')
const res = require('express/lib/response')

const router = new Router()

router.post('/register', accountController.create)
router.post('/login', accountController.login)
router.get('/', () =>{
    res.json('server funkar')
})
router.post('/matter', matterValidator.checkRole, matterController.create )
module.exports = router
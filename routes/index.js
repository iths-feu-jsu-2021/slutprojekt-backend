const accountController = require('../controllers/accountController')
const matterController = require('../controllers/matterController')
const messageController = require('../controllers/messageController')
const customerController = require('../controllers/customerController')
const matterMiddleware = require('../middlewares/matterMiddleware')
const adminController = require('../controllers/andminController')
//const messageValidator = require('../validations/messageValidator')
const { Router } = require('express')
const res = require('express/lib/response')

const router = new Router()
//account endpoints
router.post('/register', accountController.create)
router.post('/login', accountController.login)
router.get('/', () =>{
    res.json('server funkar')
})
// matter endpoints
router.post('/matter', matterMiddleware.checkRole, matterController.create )
router.get('/matter', matterController.getAll)
// message endpoints
router.post('/message', messageController.create)
// custom endpoints
router.get('/customers', customerController.getAll)
//
router.post('/user', adminController.create)
module.exports = router
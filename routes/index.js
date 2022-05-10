
//controllers
const accountController = require('../controllers/accountController')
const matterController = require('../controllers/matterController')
const messageController = require('../controllers/messageController')
const customerController = require('../controllers/customerController')
const adminController = require('../controllers/adminController')

const errorHandler = require('../middlewares/errorHandeling')

// const validations = require('../validations')
const validate = require('../validations')

//middlewares
const auth = require('../middlewares/auth')

const { Router } = require('express')
const res = require('express/lib/response')
const router = new Router()

//account endpoints
//OBS denna endpoint och router post /user gör samma sak! Välj vilken som ska användas.
router.post('/register', accountController.create)
router.post('/login', accountController.login)
router.get('/', () =>{
    res.json('server funkar')
})
// matter endpoints
router.post('/matter', auth.checkIfWorker, matterController.create )
router.get('/matter', matterController.getAll)
// message endpoints
router.post('/message', messageController.create)

// custom endpoints
router.get('/customers', customerController.getAll)

//admin enpoints
router.post('/user', auth.checkIfAdmin, validate.password, adminController.createUser)
router.get('/user', auth.checkIfAdmin, adminController.getAllUsers)
router.patch('/user', auth.checkIfAdmin, adminController.updateUser)
module.exports = router
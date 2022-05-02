const accountController = require('../controllers/accountController')
const { Router } = require('express')

const router = new Router()

router.post('/register', accountController.create)
// router.post('/login', accountController.login)

module.exports = router
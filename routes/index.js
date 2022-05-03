const accountController = require('../controllers/accountController')
const { Router } = require('express')
const res = require('express/lib/response')

const router = new Router()

router.post('/register', accountController.create)
router.post('/login', accountController.login)
router.get('/', () =>{
    res.json('server funkar')
})

module.exports = router
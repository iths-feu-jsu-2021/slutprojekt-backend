//express Router
const { Router } = require('express')
//multer
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
//controllers
const accountController = require('../controllers/accountController')
const matterController = require('../controllers/matterController')
const messageController = require('../controllers/messageController')
const customerController = require('../controllers/customerController')
const adminController = require('../controllers/adminController')

// const validations = require('../validations')
const validate = require('../validations')

//middlewares
const auth = require('../middlewares/auth')

// const res = require('express/lib/response')
const router = new Router()

//account endpoints

router.post('/login', accountController.login)
router.use(auth.setRole)
router.get('/', () =>{
    res.json('server funkar')
})
// matter endpoints
router.post('/matter', validate.createMatter, auth.checkIfAdminOrWorker, matterController.create )
router.get('/matter', auth.checkIfAdminOrWorker, matterController.getAll)
router.patch('/matter', validate.updateMatter, auth.checkIfAdminOrWorker, matterController.update)
router.post('/matter/:id/image', auth.relationToMatter, upload.single('file'), matterController.uploadImg)
router.get('/matter/:id/image', auth.relationToMatter, matterController.getOne)

//image enpoints
//Lägg på en validation som kollar att en req.file finns i requesten

// message endpoints
router.post('/message/:id', auth.relationToMatter, messageController.create)

// custom endpoints
//lägg på auth
router.get('/customers', auth.checkIfAdminOrWorker, customerController.getAll)

//admin enpoints
router.post('/user', validate.createUser, auth.checkIfAdmin, adminController.createUser)
router.get('/user', auth.checkIfAdmin, adminController.getAllUsers)
router.patch('/user', auth.checkIfAdmin, adminController.updateUser)



module.exports = router
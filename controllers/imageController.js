const {Image} = require('../models')
const path = require('path')

module.exports = {
uploadImg: async(req, res)=>{
    try{
        //console.log('req.file är: ' + req.file)
        const userId = req.user.id
        const matterId = req.params.id
        const name = req.file.originalname
        console.log(req.file)
        const image = await Image.create({path: req.file.path, matterId: matterId, userId: userId, fileName: name})
        res.json('File uploaded!')
    }catch(err){
        console.log('MatterControllerError är ' + err)
    }
},
getOne: async (req, res, next) => {
    try{
    const id = req.params.image_id
    const image = await Image.findByPk(id)
        const response =
          path.join(__dirname, "..", "public", "data", "uploads", image.fileName)
          console.log(response)
        res.sendFile( response );
    // res.sendFile(image.path, root: path.join(__dirname))
} catch(err) {
    next(err)
}}
}
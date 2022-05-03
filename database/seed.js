
const {User} = require('../models')

async function seed() {
    try{
        await User.create({
            role: 'worker',
            username: 'Testoigenännu en gång',
            password: 'skjdfhsösdfsdfkgf'
        })
    }
    catch(error){
        console.log('Error är: ' + error)
    }

}

seed()
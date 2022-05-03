
const {User, Matter, Message} = require('../models')

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
    try{
        await Matter.create({
            title: 'Ett seedat ärende',
            content: 'Ett seedad ärendecontent',
            role: 'worker'
        })
    }
    catch(error){
        console.log('Error är: ' + error)
    }
    try{
        await Message.create({
            title: 'Seedad messagetitle',
            content: 'Seedad messagecontent',
            customerId: 'seedat CustomerId'
        })
    }
    catch(error){
        console.log('Error är: ' + error)
    }

}

seed()
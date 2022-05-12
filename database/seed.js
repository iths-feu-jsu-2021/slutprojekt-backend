
const {User, Matter, Message} = require('../models')

async function seed() {
    try{
       const worker = await User.create({
            role: 'worker',
            username: 'Makke',
            password: 'Bygger',
            email: 'worker@email.com'
        })
       const customerOne = await User.create({
            role: 'customer',
            username: 'Seedad customer',
            password: 'skjdfhsösdfsdfkgf',
            email: 'customerOne@email.com'
        })
        const customerTwo = await User.create({
            role: 'customer',
            username: 'Meeko',
            password: 'Shiba',
            email: 'customerTwo@email.com'
        })
        const admin = await User.create({
            role: 'admin',
            username: 'admin',
            password: 'admin',
            email: 'admin@email.com'
        })
        const matter = await Matter.create({
            title: 'Ett seedat ärende',
            content: 'Ett seedad ärendecontent',
            workerId: worker.id,
            customerId: customerOne.id,
            role: 'worker'
        })
        const message = await Message.create({
            title: 'Ett seedat message',
            content: 'Ett seedad messagecontent',
            img: 'Seedad IMGPath',
            matterId: matter.id,
            senderId: customerTwo.id,
        })


        // await Message.create({
        //     title: 'Seedad messagetitle',
        //     content: 'Seedad messagecontent',
        //     img: 'Seedad imgpath',
        //     matter: matter.id
        //     //matter: 'seedat matterId'
        // })
    }
    catch(error){
        console.log('Seederror är: ' + error)
    }

}

seed()
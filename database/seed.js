
const {User, Matter, Message} = require('../models')

async function seed() {
    try{
       const worker = await User.create({
            role: 'worker',
            username: 'Testoigenännu en gång',
            password: 'skjdfhsösdfsdfkgf'
        })
       const customerOne = await User.create({
            role: 'customer',
            username: 'Seedad customer',
            password: 'skjdfhsösdfsdfkgf'
        })
        const customerTwo = await User.create({
            role: 'customer',
            username: 'Meeko',
            password: 'Shiba'
        })
        const admin = await User.create({
            role: 'admin',
            username: 'admin',
            password: 'admin'
        })
        const matter = await Matter.create({
            title: 'Ett seedat ärende',
            content: 'Ett seedad ärendecontent',
            workerId: worker.id,
            customerId: customerOne.id,
            role: 'worker'
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
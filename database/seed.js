
const User = require('../models')

async function seed() {
    await User.create({
        role: 'worker',
        username: 'Testoigenännu en gång',
        password: 'skjdfhsösdfsdfkgf'
    })

}

seed()
const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`im running to the hills on port ${PORT}`))
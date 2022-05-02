const express = require('express')
const router = require('./routes')
const app = express()
console.log('hej')

app.use(express.json())
app.use(urlencoded({extended: true}))
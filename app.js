const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))
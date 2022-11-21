const express = require('express')
const Bodyparser = require('body-parser')
const routesHandler = require('./routes/handler')

const app = express()
app.use(Bodyparser.urlencoded({ extended: false }))
app.use(Bodyparser.json())
app.use("/",routesHandler)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
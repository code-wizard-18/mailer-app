    // app server 
    const express = require('express')
    const bodyParser = require('body-parser')
    const cors = require('cors')
    const { sendEmail } = require('./sendEmail')
    const app = express()
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.post('/sendEmail', (req, res) => {
        sendEmail('enquiry')
        sendEmail('admin')
        res.send('Email sent successfully')
    })

    app.listen(5000, () => console.log('Server started on port 3000'))
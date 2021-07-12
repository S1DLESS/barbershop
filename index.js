const express = require('express')
const {connect} = require('mongoose')
const router = require('./routes')
const cors = require('cors')
const path = require('path')


const PORT = process.env.PORT || 5000
const dbUrl = 'mongodb+srv://sidless:3KiJ4lLXLTwJlfFl@cluster0.mhqqm.mongodb.net/barbershop?retryWrites=true&w=majority'
const app = express()

app.use(cors())
app.use('/static', express.static('static'))
app.use(express.json())
app.use('/', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const start = async () => {
    try {
        await connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log('Server error: ', e)
    }
}

start()
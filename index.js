const express = require('express')
const {connect} = require('mongoose')
const router = require('./routes')
const cors = require('cors')


const PORT = process.env.PORT || 5000
const dbUrl = 'mongodb+srv://sidless:3KiJ4lLXLTwJlfFl@cluster0.mhqqm.mongodb.net/barbershop?retryWrites=true&w=majority'
const app = express()

app.use(cors())
app.use('/static', express.static('static'))
app.use(express.json())
app.use('/', router)

app.use('/', (req, res) => {
    res.send('Barbershop-API')
})

const start = async () => {
    try {
        await connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log('Server error: ', e)
    }
}

start()
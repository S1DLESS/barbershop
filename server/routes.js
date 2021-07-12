const {Router} = require('express')
const Barber = require('./models/Barber')
const Service = require('./models/Service')
const Post = require('./models/Post')


const router = Router()

router.get('/barber', async (req, res) => {
    try {
        const data = await Barber.find()
        return res.json(data)
    } catch (e) {
        console.log('Router error: ', e)
    }
})

router.get('/barber/:id', async (req, res) => {
    try {
        const data = await Barber.findById(req.params.id)
        return res.json(data)
    } catch (e) {
        console.log('Router error: ', e)
    }
})

router.get('/service', async (req, res) => {
    try {
        const data = await Service.find()
        return res.json(data)
    } catch (e) {
        console.log('Router error: ', e)
    }
})

router.get('/service/:id', async (req, res) => {
    try {
        const data = await Service.findById(req.params.id)
        return res.json(data)
    } catch (e) {
        console.log('Router error: ', e)
    }
})

router.get('/post', async (req, res) => {
    try {
        const data = await Post.find()
        return res.json(data)
    } catch (e) {
        console.log('Router error: ', e)
    }
})

router.get('/post/:id', async (req, res) => {
    try {
        const data = await Post.findById(req.params.id)
        return res.json(data)
    } catch (e) {
        console.log('Router error: ', e)
    }
})

router.post('/post', async (req, res) => {
    try {
        const ress = req.body
        await Post.create(ress)
        res.status(201)
    } catch (e) {
        console.log('POST_Router error', e)
    }
})

module.exports = router
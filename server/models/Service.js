const {Schema, model, Types} = require('mongoose')


const schema = new Schema({
    title: {type: String, required: true},
    time: {type: Number},
    price: {type: Number},
    description: {type: String},
    barber: [{type: Types.ObjectId, ref: 'Barber'}]
})

module.exports = model('Service', schema)
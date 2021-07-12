const {Schema, model, Types} = require('mongoose')


const schema = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String},
    comment: {type: String},
    barberId: {type: Types.ObjectId, ref: 'Barber'},
    serviceId: {type: Types.ObjectId, ref: 'Service'},
    date: {type: Number}
})

module.exports = model('Post', schema)
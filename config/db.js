const mongoose = require('mongoose')

const cnx = mongoose.createConnection('mongodb://localhost:27017/ToDoDB').on('open', () => {
    console.log('MongoDB Connected...!!!')
}).on('error', () => {
    console.log('MongoDB failed connection...!!!')
})

module.exports = cnx

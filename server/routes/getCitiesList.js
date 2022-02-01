const express = require('express')
const router = express.Router()
const hotelsData = require('../../hotels.json')


router.get('/cities', (req, res) => {
    const cities = hotelsData.map(hotel => {
        return hotel.city
    }).filter((x, i, a) => a.indexOf(x) == i).sort()

    res.json(cities)
})

module.exports = router
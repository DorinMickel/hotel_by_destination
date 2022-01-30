const express = require('express')
const router = express.Router()
const hotelsData = require('../../hotels.json')

router.get('/hotelsByCity', (req, res) => {
    const hotelsByCity = hotelsData.filter(hotel => {
        return hotel.city === req.query.city
    })
    res.json(hotelsByCity)
  })

module.exports = router
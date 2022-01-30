const express = require('express')
const router = express.Router()
const hotelsData = require('../../hotels.json')

router.get('/hotel', (req,res) => {
    const chosenHotel = hotelsData.find(hotel => {
      return (
        hotel.id === parseInt(req.query.id)
      )
    })
    res.json(chosenHotel)
  })

module.exports = router
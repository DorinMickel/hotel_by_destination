const express = require('express')
const router = express.Router()
const hotelsData = require('../../hotels.json')

router.get('/hotelsByCity', (req, res) => {
    const hotelsByCity = hotelsData.filter(hotel => {
        return hotel.city === req.query.city
    })
    const page = parseInt(req.query.page);
    const limit = 6;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if(endIndex < hotelsByCity.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }
    if(startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        };
    }
    
    results.results = hotelsByCity.slice(startIndex, endIndex);
    res.paginationResults = results
    res.json(res.paginationResults)    
  })

module.exports = router
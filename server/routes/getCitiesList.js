const express = require('express')
const router = express.Router()
const hotelsData = require('../../hotels.json')


router.get('/cities', (req, res) => {
    const cities = hotelsData.map(hotel => {
        return hotel.city
    }).filter((x, i, a) => a.indexOf(x) == i).sort()
    
    // for(let i = 0; i < cities.length-1; i++){
    //     if(cities[i] === cities[i+1]){
    //         cities.splice(i+1,1)
    //         i--
    //     }
    //     else{
    //         continue;
    //     }
    // }
    res.json(cities)
})

// const cities = hotelsData.map(hotel => {
//         return hotel.city
//     }).sort()
    
// for(let i = 0; i < cities.length-1; i++){
//     if(cities[i] === cities[i+1]){
//         cities.splice(i+1,1)
//         i--
//     }
//     else{
//         continue;
//     }
// }


module.exports = router
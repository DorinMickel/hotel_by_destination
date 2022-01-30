const express = require('express')
const cors = require('cors');
const cities = require('./routes/getCitiesList');
const hotelsByCity = require('./routes/hotelsByCity')
const chosenHotel = require('./routes/chosenHotel')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cities)
// app.get('/cities', (req, res) => {
//   res.json(cities)
// })

app.use(hotelsByCity)
// app.get('/hotelsByCities', (req, res) => {
//   const hotelsByCity = hotelsData.filter(hotel => {
//       return hotel.city === req.query.city
//   })
//   res.json(hotelsByCity)
// })

app.use(chosenHotel)
// app.get('/hotel', (req,res) => {
//   const chosenHotel = hotelsData.find(hotel => {
//     return (
//       hotel.id === parseInt(req.query.id)
//     )
//   })
//   res.json(chosenHotel)
// })

app.listen(port, () => {
  console.log(`Home assignment app listening on port ${port}`)
})





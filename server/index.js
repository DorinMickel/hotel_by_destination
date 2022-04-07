const express = require('express')
const cors = require('cors');
const cities = require('./routes/getCitiesList');
const hotelsByCity = require('./routes/hotelsByCity')
const chosenHotel = require('./routes/chosenHotel')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


app.use(cities)

app.use(hotelsByCity)

app.use(chosenHotel)

app.listen(port)





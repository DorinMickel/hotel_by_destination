export const HotelInitialState = {
    id: -1,
    city: '',
    hotelName: '',
    hotelImg: '',
    hotelDescription: ''
}

export const HotelsListInitialState = {
    nextPage: 2,
    currentPage: 1,
    hotelsListResults: [HotelInitialState]
}

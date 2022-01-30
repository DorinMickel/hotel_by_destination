import { combineReducers } from "redux";
import chosenHotelReducer from "./chosenHotelReducer";
import destinationReducer from "./destinationReducer";
import hotelsByCityReducer from "./hotelsByCityReducer";


const rootReducers = combineReducers({
    destination: destinationReducer,
    hotel: chosenHotelReducer,
    hotelsByCity: hotelsByCityReducer
})

export default rootReducers

export type State = ReturnType<typeof rootReducers>
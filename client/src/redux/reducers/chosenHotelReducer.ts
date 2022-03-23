import { Hotel } from "../../models/hotelModel"
import { ActionType } from "../action-types/actionTypes"
import { HotelAction } from "../actions-interface/chosenHotelAction"
import { HotelInitialState } from "./initialState"

const chosenHotelReducer = (state: Hotel = HotelInitialState, action: HotelAction) => {
    switch(action.type){
        case ActionType.CHOSEN_HOTEL:
            return action.payload
        default:
            return state
    }
}

export default chosenHotelReducer
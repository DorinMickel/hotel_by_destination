import { Hotel } from "../../models/hotelModel"
import { ActionType } from "../action-types/actionTypes"
import { HotelsListAction } from "../actions-interface/getHotelsList"
import { HotelInitialState } from "./initialState"

const hotelsByCityReducer = (state: Hotel[] = [HotelInitialState], action: HotelsListAction) => {
    switch (action.type){
        case ActionType.GET_HOTELS_LIST:
            return action.payload
        default:
            return state
    }
}

export default hotelsByCityReducer
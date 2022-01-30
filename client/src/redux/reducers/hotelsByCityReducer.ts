import { ActionType } from "../action-types/actionTypes"
import { HotelsListAction } from "../actions-interface/getHotelsList"

const initialState = [{}]

const hotelsByCityReducer = (state: any = initialState, action: HotelsListAction) => {
    switch (action.type){
        case ActionType.GET_HOTELS_LIST:
            return action.payload
        default:
            return state
    }
}

export default hotelsByCityReducer
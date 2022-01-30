import { ActionType } from "../action-types/actionTypes"
import { HotelAction } from "../actions-interface/chosenHotelAction"

const initiaState = {}

const chosenHotelReducer = (state: any = initiaState, action: HotelAction) => {
    switch(action.type){
        case ActionType.CHOSEN_HOTEL:
            return action.payload
        default:
            return state
    }
}

export default chosenHotelReducer
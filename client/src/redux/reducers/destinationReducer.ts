import { ActionType } from "../action-types/actionTypes"
import { DestAction } from "../actions-interface/destinationAction"

const initialState = ""

const destinationReducer = (state: string = initialState, action: DestAction) => {
    switch(action.type){
        case ActionType.CHOOSE_DESTINATION:
            return action.payload
        default:
            return state
    }
}

export default destinationReducer
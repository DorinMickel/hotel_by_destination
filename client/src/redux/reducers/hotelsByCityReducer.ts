import { HotelsListPage } from "../../models/hotelModel"
import { ActionType } from "../action-types/actionTypes"
import { ClearHotelsList } from "../actions-interface/clearHotelsList"
import { HotelsListAction } from "../actions-interface/getHotelsList"
import { HotelsListInitialState } from "./initialState"

const hotelsByCityReducer = (state: HotelsListPage = HotelsListInitialState, action: HotelsListAction | ClearHotelsList) => {
    switch (action.type){
        case ActionType.GET_HOTELS_LIST:
            const prevResults = state.hotelsListResults[0].id === -1 ? [] : state.hotelsListResults;
            return {
                nextPage: action.payload.nextPage,
                currentPage: action.payload.currentPage,
                hotelsListResults: prevResults.concat(action.payload.hotelsListResults)
            }

        case ActionType.CLEAR_HOTELS_LIST:
            return HotelsListInitialState
        default:
            return state
    }
}

export default hotelsByCityReducer
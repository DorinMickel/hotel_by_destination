import { Dispatch } from "redux";
import { ActionType } from "../action-types/actionTypes"
import { HotelAction } from "../actions-interface/chosenHotelAction";
import { ClearHotelsList } from "../actions-interface/clearHotelsList";
import { DestAction } from "../actions-interface/destinationAction";
import { HotelsListAction } from "../actions-interface/getHotelsList";
import { HotelInitialState } from "../reducers/initialState";

export const chooseDestination = (destination: string) => {
    return (dispatch: Dispatch<DestAction>) => {
        dispatch({
            type: ActionType.CHOOSE_DESTINATION,
            payload: destination
        })
    }
}

export const chooseHotel = (hotel: HotelAction["payload"]) => {
    return (dispatch: Dispatch<HotelAction>) => {
        dispatch({
            type: ActionType.CHOSEN_HOTEL,
            payload: hotel
        })
    }
}


export const getHotelsByCity = (hotelsByCity: HotelsListAction["payload"]) => {
    return (dispatch: Dispatch<HotelsListAction>) => {
        dispatch({
            type: ActionType.GET_HOTELS_LIST,
            payload: hotelsByCity
        })
    }
}

export const clearHotels = () => {
    return (dispatch: Dispatch<ClearHotelsList>) => {
        dispatch({
            type: ActionType.CLEAR_HOTELS_LIST,
            payload: [HotelInitialState]
        })
    }
}
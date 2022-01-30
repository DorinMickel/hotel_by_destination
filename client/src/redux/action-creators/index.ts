import { Dispatch } from "redux";
import { ActionType } from "../action-types/actionTypes"
import { HotelAction } from "../actions-interface/chosenHotelAction";
import { DestAction } from "../actions-interface/destinationAction";
import { HotelsListAction } from "../actions-interface/getHotelsList";

export const chooseDestination = (destination: string) => {
    return (dispatch: Dispatch<DestAction>) => {
        dispatch({
            type: ActionType.CHOOSE_DESTINATION,
            payload: destination
        })
    }
}

interface Hotel {
    id: number,
    city: string,
    hotelName: string,
    hotelImg: string, 
    hotelDescription: string
}


export const chooseHotel = (hotel: Hotel) => {
    return (dispatch: Dispatch<HotelAction>) => {
        dispatch({
            type: ActionType.CHOSEN_HOTEL,
            payload: hotel
        })
    }
}

type HotelsByCity = [{
    hotelName: string,
    hotelImg: string,
    id: number,
    hotelDescription: string,
    city: string
}]

export const getHotelsByCity = (hotelsByCity: HotelsByCity) => {
    return (dispatch: Dispatch<HotelsListAction>) => {
        dispatch({
            type: ActionType.GET_HOTELS_LIST,
            payload: hotelsByCity
        })
    }
}
import { ActionType } from "../action-types/actionTypes";

interface chosenHotelAction {
    type: ActionType.CHOSEN_HOTEL,
    payload: {
        id: number,
        city: string,
        hotelName: string,
        hotelImg: string, 
        hotelDescription: string
    }

}

export type HotelAction = chosenHotelAction
import { ActionType } from "../action-types/actionTypes";

interface getHotelList {
    type: ActionType.GET_HOTELS_LIST,
    payload: [{
        hotelName: string,
        hotelImg: string,
        id: number,
        hotelDescription: string,
        city: string
    }]
    
}

export type HotelsListAction = getHotelList
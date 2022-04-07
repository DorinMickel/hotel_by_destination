import { HotelsListPage } from "../../models/hotelModel";
import { ActionType } from "../action-types/actionTypes";

interface getHotelList {
    type: ActionType.GET_HOTELS_LIST,
    payload: HotelsListPage
    
}

export type HotelsListAction = getHotelList
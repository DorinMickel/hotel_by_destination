import { Hotel } from "../../models/hotelModel";
import { ActionType } from "../action-types/actionTypes";

interface ClearHotels {
    type: ActionType.CLEAR_HOTELS_LIST,
    payload: [Hotel]
}

export type ClearHotelsList = ClearHotels
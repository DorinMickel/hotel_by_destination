import { Hotel } from "../../models/hotelModel";
import { ActionType } from "../action-types/actionTypes";

interface chosenHotelAction {
    type: ActionType.CHOSEN_HOTEL,
    payload: Hotel

}

export type HotelAction = chosenHotelAction
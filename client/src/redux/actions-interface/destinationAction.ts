import { ActionType } from "../action-types/actionTypes";

interface DestinationAction {
    type: ActionType.CHOOSE_DESTINATION,
    payload: string
}

export type DestAction = DestinationAction
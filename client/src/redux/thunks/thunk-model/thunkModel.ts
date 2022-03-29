import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { State } from "../../reducers/rootReducers";

export type ThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    State,
    unknown,
    AnyAction
>
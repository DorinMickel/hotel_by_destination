import axios from "axios";
import { chooseHotel } from "../action-creators";
import { ThunkType } from "./thunk-model/thunkModel";


export const getHotelThunk = (id: number): ThunkType => 
    async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/hotel', {params: {id: id}})
            dispatch(chooseHotel(response.data))
        }
        catch (error){
            console.log(error)
        }
    }
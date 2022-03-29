import axios from "axios"
import { Hotel } from "../../models/hotelModel"
import { getHotelsByCity } from "../action-creators"
import { ThunkType } from "./thunk-model/thunkModel"

export const getHotelsByCityThunk = (city: string): ThunkType => 
    async dispatch => {
        const url = 'http://localhost:5000/hotelsByCity'
        try{
            await axios.get<[Hotel]>(url, {params: {city: city}})
            .then( res => dispatch(getHotelsByCity(res.data)))
        }
        catch (error) {
            console.log(error)
    }
}



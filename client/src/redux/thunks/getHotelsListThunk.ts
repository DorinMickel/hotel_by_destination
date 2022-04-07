import axios from "axios"
import { HotelsServerList } from "../../models/hotelModel"
import { getHotelsByCity } from "../action-creators"
import { ThunkType } from "./thunk-model/thunkModel"

export const getHotelsByCityThunk = (city: string, page: number): ThunkType => 
    async dispatch => {
        const url = 'http://localhost:5000/hotelsByCity'
        try{
            await axios.get<HotelsServerList>(url, {params: {city: city, page: page}})
            .then( res => {
                if(res.data.next){
                    const hotelListPage = {
                        nextPage: res.data.next.page,
                        currentPage: page,
                        hotelsListResults: res.data.results
                    }
                    dispatch(getHotelsByCity(hotelListPage))
                }
                else {
                    const hotelListPage = {
                        nextPage: page,
                        currentPage: page,
                        hotelsListResults: res.data.results
                    }
                    dispatch(getHotelsByCity(hotelListPage))
                }
            })
        }
        catch (error) {
            console.log(error)
    }
}



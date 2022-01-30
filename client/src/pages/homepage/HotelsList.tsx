import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../redux';
import HotelListItem from './HotelListItem';
import { Container, Li, Ul } from '../../styles/styledComponents';
import axios from 'axios';
import { bindActionCreators } from 'redux';

type Hotel = {
    hotelName: string,
    hotelImg: string,
    id: number,
    hotelDescription: string,
    city: string
}

const hotelsByCityUrl = 'http://localhost:5000/hotelsByCity';

const HotelList = () => {
    const destinationState = useSelector((state: State) => state.destination);
    const hotelsListState = useSelector((state: State) => state.hotelsByCity)
    const dispatch = useDispatch();
    const {getHotelsByCity} = bindActionCreators(actionCreators, dispatch)
    
    
    useEffect(() => {
        axios.get(hotelsByCityUrl, {params: {city: destinationState}})
        .then((res) => {
            getHotelsByCity(res.data)
        })
    })

    const hotelList = hotelsListState.map((hotel: Hotel, index: number) => {
        return (
            <Li key={index}>
                <HotelListItem 
                    hotelName={hotel.hotelName}
                    hotelImg={hotel.hotelImg}
                    id={hotel.id}
                />
            </Li> 
        )
    })

    return (
        <Container>
            <Ul>
                {hotelList}
            </Ul>
        </Container>
    )
}

export default HotelList

// let hotelList;

    // const getHotelByCity = async () => {
    //     const response = await axios.get('http://localhost:5000/hotelsByCities', {params: {city: state}})
    //     .then(res => {
    //         setHotelsByCity(res.data)
    //         console.log(state)
    //     })
        
    //     hotelList = hotelsByCity.map((hotel, index) => {
    //         return (
    //             <Li key={index}>
    //                 <HotelListItem 
    //                     hotelName={hotel.hotelName}
    //                     hotelImg={hotel.hotelImg}
    //                 />
    //             </Li> 
    //         )
    //     })
    // }

    // getHotelByCity()
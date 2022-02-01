import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../redux';
import HotelListItem from './HotelListItem';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import Container from '../../../common/Container';
import Li from './styled-components/Li';
import Ul from './styled-components/Ul';

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


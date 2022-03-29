import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../redux';
import HotelListItem from './HotelListItem';
import Container from '../../../common/Container';
import Li from './styled-components/Li';
import Ul from './styled-components/Ul';
import { Hotel } from '../../../models/hotelModel';

const HotelList = () => {
    const hotelsListState = useSelector((state: State) => state.hotelsByCity)
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


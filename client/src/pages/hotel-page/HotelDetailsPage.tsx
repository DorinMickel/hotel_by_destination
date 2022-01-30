import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux';
import { Container, H1 } from '../../styles/styledComponents';


const HotelDetailsPage = () => {
    const hotelState = useSelector((state: State) => state.hotel)
    console.log(hotelState)
    
    return (
        <Container>
            <H1>{hotelState.hotelName}</H1>
            <Container>
                <img src={hotelState.hotelImg}/>
                <p>{hotelState.hotelDescription}</p>
            </Container>
        </Container>
    )
}

export default HotelDetailsPage
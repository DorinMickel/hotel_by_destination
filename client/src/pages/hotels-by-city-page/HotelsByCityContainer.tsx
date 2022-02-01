import React from 'react';
import Container from '../../common/Container';
import Dropdown from '../homepage/dropdown/Dropdown';
import HotelList from './hotels-list/HotelsList';
import TopImg from '../../common/TopImg';


const HotelsByCityContainer = () => {

    return (
        <React.Fragment>
            <TopImg/>
            <Container>
                <Dropdown/>
                <HotelList/>
            </Container>
        </React.Fragment>
    
    )
}

export default HotelsByCityContainer
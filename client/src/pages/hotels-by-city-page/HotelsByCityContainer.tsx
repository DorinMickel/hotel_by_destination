import React from 'react';
import Container from '../../common/Container';
import HotelList from './hotels-list/HotelsList';

const HotelsByCityContainer: React.FC = () => {

    return (
        <React.Fragment>
            <Container>
                <HotelList/>
            </Container>
        </React.Fragment>
    
    )
}

export default HotelsByCityContainer
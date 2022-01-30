import React from 'react';
import { Container } from '../../styles/styledComponents';
import Dropdown from './Dropdown';
import HotelList from './HotelsList';

const HomepageContainer = () => {
    return (
        <Container>
            <Dropdown/>
            <HotelList/>
        </Container>
    )
}

export default HomepageContainer
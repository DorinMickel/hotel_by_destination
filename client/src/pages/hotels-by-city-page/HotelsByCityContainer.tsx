import React from 'react';
import Container from '../../common/Container';
import Dropdown from '../homepage/dropdown/Dropdown';
import HotelList from './hotels-list/HotelsList';
import '../../common/styles/common-styles.css'


const HotelsByCityContainer = () => {

    return (
        <React.Fragment>
            <div className='top-img'></div>
            <Container>
                <Dropdown/>
                <HotelList/>
            </Container>
        </React.Fragment>
    
    )
}

export default HotelsByCityContainer
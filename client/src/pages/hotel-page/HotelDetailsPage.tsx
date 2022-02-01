import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux';
import H1 from '../../common/H1';
import './styles/hotel-details-page.css'
import Box from '../../common/Box';
import Container from '../../common/Container';
import Button from '../../common/Button';



const HotelDetailsPage = () => {
    const hotelState = useSelector((state: State) => state.hotel)
    const destinationState = useSelector((state: State) => state.destination)
    console.log(hotelState)
    
    return (
        <React.Fragment>
            <div className='top-img'></div>
            <Container>
                <Box>
                    <H1 h1Text={hotelState.hotelName}/>
                </Box>
                <Container>
                    <img className='img-htl-dtl-pge' src={hotelState.hotelImg} alt={hotelState.hotelName}/>
                    <p className='p-htl-dtl-pge'>{hotelState.hotelDescription}</p>
                    <a href={`/${destinationState}`}><Button btnText='Go Back'/></a>
                </Container>
            </Container>
            
        </React.Fragment>
        
    )
}

export default HotelDetailsPage
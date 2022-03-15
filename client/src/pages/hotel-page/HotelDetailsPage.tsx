import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux';
import H1 from '../../common/H1';
import Container from '../../common/Container';
import Button from '../../common/Button';
import Img from './styled-components/Img';
import ExtendedBox from './styled-components/ExtendedBox';
import './styles/hotel-details-page.css'
import { useNavigate } from 'react-router';


const HotelDetailsPage: React.FC = () => {
    const hotelState = useSelector((state: State) => state.hotel)
    const destinationState = useSelector((state: State) => state.destination)
    const navigate = useNavigate()

    const goBackBtn = () => {
        navigate(`/${destinationState}`)
    }
    
    return (
        <React.Fragment>
            <Container>
                <ExtendedBox>
                    <H1 h1Text={hotelState.hotelName}/>
                </ExtendedBox>
                <Container>
                    <Img src={hotelState.hotelImg} alt={hotelState.hotelName}/>
                    <p className='p-htl-dtl-pge'>{hotelState.hotelDescription}</p>
                    <Button btnText='Go Back' handleClick={goBackBtn}/>
                </Container>
            </Container>
            
        </React.Fragment>
        
    )
}

export default HotelDetailsPage
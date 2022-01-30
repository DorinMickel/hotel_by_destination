import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../redux';
import { Title , Container, InnerContainer } from '../../styles/hotelListItemStyle'
import { Button, ImgDiv } from '../../styles/styledComponents';


type HotelListItemProps = {
    hotelName: string,
    hotelImg: string,
    id: number,
}

const HotelListItem = (props: HotelListItemProps) => {
    const dispatch = useDispatch();
    const {chooseHotel} = bindActionCreators(actionCreators, dispatch);
    const hotelState = useSelector((state: State) => state.hotel)

    const setChosenHotel = async (id: number) => {
        const response = await axios.get('http://localhost:5000/hotel', {params: {id: id}})
        chooseHotel(response.data)
    }

    return (
        <Container>
            <ImgDiv>
                <img style={{width: '100%'}} src={props.hotelImg}/>
            </ImgDiv>
            <InnerContainer>
                <a href={`/hotel/${props.id}`} onClick={() => setChosenHotel(props.id)}><Title>{props.hotelName}</Title></a>
                <div>
                    <Button>Book now</Button>
                </div>
            </InnerContainer>
        </Container>
    )
}

export default HotelListItem
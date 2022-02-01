import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';
import Button from '../../../common/Button';
import ImgDiv from '../../../common/ImgDiv';
import './styles/hotel-list-item.css'
import Container from '../../../common/Container';
import Title from './styled-components/Title';


type HotelListItemProps = {
    hotelName: string,
    hotelImg: string,
    id: number,
}

const HotelListItem = (props: HotelListItemProps) => {
    const dispatch = useDispatch();
    const {chooseHotel} = bindActionCreators(actionCreators, dispatch);

    const setChosenHotel = async (id: number) => {
        const response = await axios.get('http://localhost:5000/hotel', {params: {id: id}})
        chooseHotel(response.data)
    }

    const bookNowBtn = () => {
        window.location.href = `/hotel/${props.id}`
    }

    return (
        <Container isRow>
            <ImgDiv>
                <img style={{width: '100%'}} src={props.hotelImg} alt={props.hotelName}/>
            </ImgDiv>
            <a className='a-htl-lst-itm' href={`/hotel/${props.id}`} onClick={() => setChosenHotel(props.id)}>
                <Title ttlText={props.hotelName}/>
                </a>
            <div className='btn-htl-lst-itm'>
                <Button btnText='Book now' handleClick={bookNowBtn}/>
            </div>
        </Container>
    )
}

export default HotelListItem
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../common/Button';
import ImgDiv from './styled-components/ImgDiv';
import './styles/hotel-list-item.css'
import Container from '../../../common/Container';
import Title from './styled-components/Title';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getHotelThunk } from '../../../redux/thunks/getHotelThunk';


type HotelListItemProps = {
    hotelName: string,
    hotelImg: string,
    id: number,
}

const HotelListItem = (props: HotelListItemProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const setChosenHotel = (id: number) => {
        dispatch(getHotelThunk(id))
    }

    const bookNowBtn = () => {
        setChosenHotel(props.id)
        navigate(`/hotel/${props.id}`)
    }

    return (
        <Container isRow isNotAlign>
            <ImgDiv>
                <img className='img--htl-lst-itm' src={props.hotelImg} alt={props.hotelName}/>
            </ImgDiv>
            <Container isNotAlign>
                <div className='a-htl-lst-itm'>
                <Link to={`/hotel/${props.id}`} onClick={() => setChosenHotel(props.id)}>
                    <Title ttlText={props.hotelName}/>
                    </Link>
                </div>
                <div className='btn-htl-lst-itm'>
                    <Button btnText='Book now' handleClick={bookNowBtn}/>
                </div>
            </Container>
            
        </Container>
    )
}

export default HotelListItem
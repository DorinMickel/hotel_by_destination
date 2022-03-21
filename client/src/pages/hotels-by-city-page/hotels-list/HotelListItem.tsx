import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from '../../../redux';
import Button from '../../../common/Button';
import ImgDiv from './styled-components/ImgDiv';
import './styles/hotel-list-item.css'
import Container from '../../../common/Container';
import Title from './styled-components/Title';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { chooseHotel } from '../../../redux/action-creators';


type HotelListItemProps = {
    hotelName: string,
    hotelImg: string,
    id: number,
}

const HotelListItem = (props: HotelListItemProps) => {
    const dispatch = useDispatch();
    // const {chooseHotel} = bindActionCreators(actionCreators, dispatch);
    const navigate = useNavigate()

    const setChosenHotel = async (id: number) => {
        const response = await axios.get('http://localhost:5000/hotel', {params: {id: id}})
        dispatch(chooseHotel(response.data))
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
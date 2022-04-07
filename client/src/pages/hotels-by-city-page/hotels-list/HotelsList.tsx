import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux';
import HotelListItem from './HotelListItem';
import Container from '../../../common/Container';
import Li from './styled-components/Li';
import Ul from './styled-components/Ul';
import { Hotel } from '../../../models/hotelModel';
import { getHotelsByCityThunk } from '../../../redux/thunks/getHotelsListThunk';

const HotelList = () => {
    const {currentPage, nextPage, hotelsListResults} = useSelector((state: State) => state.hotelsByCity)
    const city = useSelector((state: State) => state.destination)
    const dispatch = useDispatch()

    const observer: React.MutableRefObject<IntersectionObserver | undefined> = useRef(undefined)
    const lastHotelRef = useCallback(node => {
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && nextPage && nextPage > currentPage){
                dispatch(getHotelsByCityThunk(city, nextPage))
            }
        })
        if(node) observer.current.observe(node)
    },[dispatch, city, nextPage, currentPage])

    const hotelList = hotelsListResults.map((hotel: Hotel, index: number) => {
        if(hotelsListResults.length === index + 1){
            return (
                <Li key={index} ref={lastHotelRef}>
                    <HotelListItem 
                        hotelName={hotel.hotelName}
                        hotelImg={hotel.hotelImg}
                        id={hotel.id}
                    />
                </Li> 
            )
        }
        else{
            return (
                <Li key={index}>
                    <HotelListItem 
                        hotelName={hotel.hotelName}
                        hotelImg={hotel.hotelImg}
                        id={hotel.id}
                    />
                </Li> 
            )
        }
        
    })

    return (
        <Container>
            <Ul>
                {hotelList}
            </Ul>
        </Container>
    )
}

export default HotelList


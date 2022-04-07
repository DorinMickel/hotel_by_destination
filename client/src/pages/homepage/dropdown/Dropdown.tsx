import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux';
import Select from './styled-components/styledDropdown';
import Label from './styled-components/styledFormLabel';
import Box from '../../../common/Box';
import H1 from '../../../common/H1';
import { useNavigate } from 'react-router';
import { chooseDestination, clearHotels } from '../../../redux/action-creators';
import { getHotelsByCityThunk } from '../../../redux/thunks/getHotelsListThunk';


const Dropdown: React.FC = () => {

    const dispatch = useDispatch();
    const destinationState = useSelector((state: State) => state.destination)
    
    const navigate = useNavigate()
    const [citiesList, setCitiesList] = useState([]);
    useEffect(() => {
            axios.get('http://localhost:5000/cities')
            .then((res) => {
                setCitiesList(res.data)
            })
    },[])
    
    const hotelCities = citiesList.map((city, index) => {
        return (
            <option key={index} value={city}>{city}</option>
        )
    })

    const chosenCity = async (e: React.FormEvent) => {
        dispatch(clearHotels())
        const city = (e.target as HTMLSelectElement).value
        dispatch(chooseDestination(city))
        await dispatch(getHotelsByCityThunk(city, 1))
        navigate(`/${city}`)
    }
    
    return (
        <Box >
            <H1 h1Text='Welcome to Hotel by Destination!'/>
            <div style={{marginTop: '10px'}}>
                <Label labelText='Choose destination:'/>
                <Select 
                options={hotelCities} 
                handleChange={chosenCity}
                value={destinationState}
                />
            </div>
        </Box>
    )
}

export default Dropdown


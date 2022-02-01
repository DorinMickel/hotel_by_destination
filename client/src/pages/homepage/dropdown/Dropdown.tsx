import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../redux';
import Select from './styled-components/styledDropdown';
import Label from './styled-components/styledFormLabel';
import Box from '../../../common/Box';
import H1 from '../../../common/H1';


const Dropdown = () => {

    const dispatch = useDispatch();
    const {chooseDestination} = bindActionCreators(actionCreators, dispatch);
    const destinationState = useSelector((state: State) => state.destination)
    
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

    const chosenCity = async (e: any) => {
        await chooseDestination(e.target.value)
        window.location.href = `/${e.target.value}`
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

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';
import { H1 } from '../../styles/styledComponents';
import Select from '../../common/styledDropdown';
import Label from '../../common/styledFormLabel';
import StyledContainer from '../../common/Container';

const Dropdown = () => {

    const dispatch = useDispatch();
    const {chooseDestination} = bindActionCreators(actionCreators, dispatch);
    
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
    
    return (
        <StyledContainer isRow={false}>
            <H1>Welcome to Hotel by Destination!</H1>
            <div >
                <Label labelText='Choose destination:'/>
                <Select 
                options={hotelCities} 
                handleChange={(e) => chooseDestination(e.target.value)}/>
            </div>
        </StyledContainer>
    )
}

export default Dropdown


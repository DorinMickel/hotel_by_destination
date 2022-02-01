import React from 'react';
import Container from '../../common/Container';
import Dropdown from './dropdown/Dropdown';
import TopImg from '../../common/TopImg';


const HomepageContainer = () => {
    return (
        <React.Fragment>
            <TopImg/>
            <Container>
                <Dropdown/>
            </Container>
        </React.Fragment>
        
    )
}

export default HomepageContainer
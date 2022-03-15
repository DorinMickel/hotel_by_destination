import React from 'react';
import { Outlet, useParams } from 'react-router';
import Container from '../../common/Container';
import Dropdown from './dropdown/Dropdown';
import TopImg from '../../common/TopImg';

const HomepageContainer: React.FC = () => {
    const params = useParams()
    return (
        <React.Fragment>
            <TopImg/>
            <Container>
                {params.id ? null : <Dropdown/>}
            </Container>
            <Outlet/>
        </React.Fragment>
        
    )
}

export default HomepageContainer
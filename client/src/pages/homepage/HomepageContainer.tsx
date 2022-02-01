import React from 'react';
import Container from '../../common/Container';
import Dropdown from './dropdown/Dropdown';
import "../../common/styles/common-styles.css"


const HomepageContainer = () => {
    return (
        <React.Fragment>
            <div className='top-img'></div>
            {/* <TopImg/> */}
            <Container>
                <Dropdown/>
            </Container>
        </React.Fragment>
        
    )
}

export default HomepageContainer
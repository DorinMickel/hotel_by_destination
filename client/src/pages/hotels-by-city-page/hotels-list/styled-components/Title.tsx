import React from "react";
import styled from "styled-components";
import breakpoints from "../../../../common/breakpoints/breakpoints";


const StyledTitle = styled.h1`
    margin: 0px 8px 0px 8px;
    color: rgb(64,64,64);
    font-size: 1.3rem;
    @media screen and ${breakpoints.device.sm}{
        font-size: 1.1rem;
    }
    @media screen and ${breakpoints.device.xs}{
        font-size: 0.8rem;
    }
`

const Title: React.FC<{ttlText: string}> = ({ttlText}) => {
    return <StyledTitle>
        {ttlText}
    </StyledTitle>
}

export default Title
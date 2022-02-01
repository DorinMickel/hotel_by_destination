import React from "react";
import styled from "styled-components";


const StyledTitle = styled.h1`
    margin: 18px;
    color: dark-grey;
    font-size: 1.3rem;

`

const Title: React.FC<{ttlText: string}> = ({ttlText}) => {
    return <StyledTitle>
        {ttlText}
    </StyledTitle>
}

export default Title
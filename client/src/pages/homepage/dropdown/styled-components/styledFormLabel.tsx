import React from "react";
import styled from "styled-components";
import breakpoints from "../../../../common/breakpoints/breakpoints";


const StyledInputLabel = styled.label`
    margin-right: 8px;
    font-size: 18px;
    @media screen and ${breakpoints.device.sm}{
        font-size: 16px;
    }
    @media screen and ${breakpoints.device.xs}{
        font-size: 14px;
    }
`

const Label: React.FC<{labelText: string}> = ({labelText}) => {
    return <StyledInputLabel>{labelText}</StyledInputLabel>
}

export default Label
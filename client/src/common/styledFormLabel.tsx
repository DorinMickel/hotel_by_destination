import React from "react";
import styled from "styled-components";


const StyledInputLabel = styled.label`
    margin-right: 8px;
    font-size: 18px;
`

const Label: React.FC<{labelText: string}> = ({labelText}) => {
    return <StyledInputLabel>{labelText}</StyledInputLabel>
}

export default Label
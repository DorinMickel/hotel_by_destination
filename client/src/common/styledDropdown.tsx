import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 16px;
    &:focus-visible{
        outline: none;
    }
`
interface SelectProps {
    options: JSX.Element[],
    handleChange?: (e: any) => void
}

const Select: React.FC<SelectProps> = ({options, handleChange}) => {
    return <StyledSelect onChange={handleChange}>
        <option></option>
        {options}
        </StyledSelect>
}

export default Select

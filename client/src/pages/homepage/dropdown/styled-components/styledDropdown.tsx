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
    handleChange?: (e: React.FormEvent) => void,
    value?: string
}

const Select: React.FC<SelectProps> = ({options, handleChange, value}) => {
    return <StyledSelect onChange={handleChange} value={value}>
        <option></option>
        {options}
        </StyledSelect>
}

export default Select

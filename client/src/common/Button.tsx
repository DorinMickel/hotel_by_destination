import React from "react";
import styled from "styled-components";
import breakpoints from "./breakpoints/breakpoints";

const StyledButton = styled.button`
    background-color: white; 
    border: solid 2px rgb(246,98,121);
    color: rgb(246,98,121);
    border-radius: 5px;
    margin: 8px;
    padding: 0.5rem;
    font-size: 18px;
    &:hover {
        background-color: rgb(246,98,121); 
        color: white;
    }
    @media screen and ${breakpoints.device.xs}{
        font-size: 16px;
        padding: 0.4rem;
    }
    @media screen and ${breakpoints.device.xs}{
        font-size: 14px;
        padding: 0.3rem;
    }
`
interface ButtonProps {
    btnText: string,
    handleClick?: () => void
}

const Button: React.FC<ButtonProps> = ({btnText, handleClick}) => {
    return <StyledButton onClick={handleClick}>
            {btnText}
        </StyledButton>

}

export default Button
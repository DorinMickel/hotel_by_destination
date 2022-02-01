import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: white; 
    border: solid 2px rgb(246,98,121);
    color: rgb(246,98,121);
    border-radius: 5px;
    margin: 8px;
    padding: 0.5rem;
    font-size: 16px;
    &:hover {
        background-color: rgb(246,98,121); 
        color: white;
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
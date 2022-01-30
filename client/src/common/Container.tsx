import React from "react";
import styled, { DefaultTheme } from "styled-components";

const StyledContainer = styled.div<{theme: DefaultTheme, isRow: boolean}>`
    display: flex;
    max-width: 1320px;
    justify-content: center;
    align-items: center;
    margin: 8px;
    width: 100%;
    flex-direction: ${({isRow}) => isRow ? 'row' : 'column'};
`
interface ContainerProps {
    isRow: boolean;
    theme?: DefaultTheme;
}


const Container: React.FC<ContainerProps> = (props, {isRow}) => {
    return (
        <StyledContainer isRow={isRow}>{props.children}</StyledContainer>
    )
}

export default Container
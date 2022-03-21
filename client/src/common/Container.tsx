import styled from "styled-components";

const Container = styled.div<{isRow?: boolean, justifyContent?: string, isNotAlign?: boolean}>`
    display: flex;
    max-width: 1320px;
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
    align-items: ${({isNotAlign}) => isNotAlign ? null : 'center'};
    margin: 8px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    flex-direction: ${({isRow}) => isRow ? 'row' : 'column'};
    `



export default Container
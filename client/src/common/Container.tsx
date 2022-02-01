
import styled from "styled-components";

const Container = styled.div<{isRow?: boolean}>`
    display: flex;
    max-width: 1320px;
    justify-content: center;
    align-items: center;
    margin: 8px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    flex-direction: ${({isRow}) => isRow ? 'row' : 'column'};

    `

// const StyledContainer = styled.div<{theme: DefaultTheme, isRow: boolean}>`
//     display: flex;
//     max-width: 1320px;
//     justify-content: center;
//     align-items: center;
//     margin: 8px;
//     width: 100%;
//     margin-right: auto;
//     margin-left: auto;
//     flex-direction: ${({isRow}) => isRow ? 'row' : 'column'};
// `
// interface ContainerProps {
//     isRow?: boolean;
//     theme?: DefaultTheme;
// }



// const Container: React.FC<ContainerProps> = (props, {isRow}) => {
//     return (
//         <StyledContainer isRow={isRow}>{props.children}</StyledContainer>
//     )
// }

export default Container
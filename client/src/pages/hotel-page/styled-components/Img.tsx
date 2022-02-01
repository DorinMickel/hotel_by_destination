import React from "react";
import styled from "styled-components";
import breakpoints from "../../../common/breakpoints/breakpoints";



const StyledImg = styled.img`
    margin-top: 10px;
    
    @media screen and ${breakpoints.device.sm}{
        width: 80%;
    }
`

interface ImgProps {
    src: string,
    alt: string,
}

const Img: React.FC<ImgProps> = ({src, alt}) => {
    return <StyledImg src={src} alt={alt}/>
}

export default Img
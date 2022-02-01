import styled from "styled-components";
import breakpoints from "../../../../common/breakpoints/breakpoints";

const ImgDiv = styled.div`
    padding: 5px;
    width: 30%;
    @media screen and ${breakpoints.device.md}{
        min-width: 210px;
    }
    @media screen and ${breakpoints.device.xs}{
        min-width: 180px;
    }
`

export default ImgDiv
import styled from "styled-components";
import Container from "./Container";

const Box = styled(Container)`
    position: absolute;
    max-width: 800px;
    width: 100%;
    top: 5rem;
    background-color: rgba(255,255,255,0.6);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
    border-radius: 15px;

`

export default Box
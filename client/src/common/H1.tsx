import React from 'react';
import styled from "styled-components";
import breakpoints from './breakpoints/breakpoints';

const H1Style = styled.h1`
    margin: 8px;
    color: rgb(64,64,64);
    @media screen and ${breakpoints.device.md}{
        font-size: 1.5em;
    }
    @media screen and ${breakpoints.device.sm}{
        font-size: 1.2em;
    }
    @media screen and ${breakpoints.device.xs}{
        font-size: 1em;
    }
`

const H1: React.FC<{h1Text: string}> = ({h1Text}) => {
    return <H1Style>{h1Text}</H1Style>
}

export default H1
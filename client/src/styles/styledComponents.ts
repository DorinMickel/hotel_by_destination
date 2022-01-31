import styled from "styled-components";


export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
`
export const ImgDiv = styled.div`
    padding: 5px;
    width: 30%
`
export const Container = styled.div`
    display: flex;
    max-width: 1320px;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 8px;
    width: 100%
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: -1px;
    border-radius: 20px;
    width: 100%;
    list-style-type: none;
`
export const Li = styled.li`
    border: solid grey 1px;
    border-radius: 5px;
    margin: 5px;
    
`
export const Button = styled.button`
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
export const H1 = styled.h1`
    
    color: grey;

`
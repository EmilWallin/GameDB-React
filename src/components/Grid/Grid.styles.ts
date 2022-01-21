import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`

`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 0.6fr));
    justify-content: center;

    @media screen and (max-width: 700px){
        grid-template-columns: repeat(auto-fit, minmax(280px, 0.5fr));
    }

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
`


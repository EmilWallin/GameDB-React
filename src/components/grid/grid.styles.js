import styled from "styled-components";

export const Wrapper = styled.div`


`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1fr;
    justify-content: center;

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.2fr;
    }
`
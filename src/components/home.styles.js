import styled from "styled-components";

export const Wrapper = styled.div `
    background: var(--darkModeBG);
    position: absolute;
    min-height: 100%;
    width: 100%;
`;

export const Content = styled.div`
    justify-content: center;
`

export const SearchText = styled.div`
    
    color: white;
    margin: auto;
    margin-top: 10px;
    text-align: center;
    font-size: 2rem;
    background-color: var(--lightPurpleTransparent);
    max-width: max-content;
    padding: 6px 10px 0px 10px;
    min-height: 50px;
    border-radius: 20px;
    text-shadow: 1px 1px 0 black, -1px 1px 0 black,-1px -1px 0 black,1px -1px 0 black;

    @media screen and (max-width: 600px){
        padding-top: 0px;
        font-size: 1.2rem;
        min-height: 28px;
    }
`

export const NoResult = styled.div`
    margin: auto;
    margin-top: 50px;
    color: white;
    background: var(--lightPurpleTransparent);
    width: fit-content;
    padding: 20px;

    font-size: 2rem;
    border-radius: 40px;
`
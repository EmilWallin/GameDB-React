import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px 0 0 20px;
    position: relative;
    text-align: center;
    margin: auto;
    
`

export const Search = styled.input`
    width: 40%;
    min-height: 40px;
    border-radius: 40px;
    font-size: 1.5rem;

    text-align: center;
    
    @media screen and (max-width: 600px){
        width: 80%;
        min-height: 35px;
        font-size: 1.2rem;
    }
`
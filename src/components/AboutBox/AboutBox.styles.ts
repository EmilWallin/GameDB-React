import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    text-align: center;
    margin: 25px;
    width: 100%;
    color: white;
    font-size: 1.8rem;

    @media screen and (max-width: 1000px){
        margin: 20px;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 800px){
        margin: 5px;
        font-size: 1.4rem;
    }

    @media screen and (max-width: 600px){
        margin: 0px;
        font-size: 1rem;
    }
`

export const Title = styled.div`
    display: inline-flex;
    font-size: 2.2vw;
    top: 5%;
    text-shadow: 1px 1px 0 var(--titleShadow), -1px 1px 0 var(--titleShadow),-1px -1px 0 var(--titleShadow),1px -1px 0 var(--titleShadow);
    max-width: 80%;

    @media screen and (max-width: 1000px){
        font-size: 4vw;
    }
`

export const Summary = styled.div`
    display: inline-flex;
    font-size: 1.8vw;
    background: var(--darkerPurple);
    border-radius: 20px;
    max-width: 90%;
    margin: 25px;

    @media screen and (max-width: 1000px){
        font-size: 2.5vw;
        margin: 5px;
        max-width: 100%;
        transition: max-width 1s;
    }

    @media screen and (max-width: 600px){
        font-size: 4vw;
        margin: 5px;
    }
`

export const RatingBox = styled.div`
    display: inline-block;
    background: var(--darkerPurple);
    width: fit-content;
    height: var(width);
    padding: 20px;
    border-radius: 40px;

    @media screen and (max-width: 600px){
        padding: 10px;
    }
`

export const InfoBox = styled.div`
    display: inline-block;
    background: var(--darkerPurple);
    width: fit-content;
    
    padding: 20px;
    border-radius: 40px;

    @media screen and (max-width: 600px){
        padding: 10px;
    }
`
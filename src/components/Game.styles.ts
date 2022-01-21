import styled, {keyframes} from "styled-components";


const FadeIn = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Wrapper = styled.div`
    opacity: 0;
    position: absolute;
    background: var(--darkModeBG);
    margin: 0;
    height: 100vh;
    animation: ${FadeIn} 1.4s ease forwards;
`

export const Content = styled.div`
    background: var(--purple);
    position: relative;
    display: flex;
    margin: auto;
    text-align: center;
    border-radius: 20px;
    max-width: 85%;
    

    @media screen and (max-width: 1000px) {
        max-width: 95%;
        transition: max-width 1s;
    }

    @media screen and (max-width: 800px) {
        display: block;
    }
`

export const Breadcrumb = styled.div`
    color: var(--lightPurple);

`

export const GameArt = styled.img`
    margin: 25px;
    object-fit: contain;
    display: inline-flex;
    height: 80%;
    width: 65%;

    border-radius: 10px;
    box-shadow: -5px 5px 3px var(--gameShadow),
     5px 5px 3px var(--gameShadow),
      5px -5px 3px var(--gameShadow),
       -5px -5px 3px var(--gameShadow);

    @media screen and (max-width: 800px) {
        width: 30%;
    }
    
`

import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 0;
    width: 100%;
    background-color: var(--purple);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    margin: 0 auto;
`


export const LogoImg = styled.img`
    height: 50px;
    padding-left: 2px;
    @media screen and (min-width: 600px) {
        padding-left: 20px;
        height: 75px;
    }
`

export const IGDBLogoImg = styled.img`
    height: 50px;
    padding-right: 2px;

    @media screen and (min-width: 600px) {
        padding-right: 20px;
        height: 75px;
    }
`
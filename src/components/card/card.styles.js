import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 240px;
    min-height: 200px;
    padding: 20px 0 0 20px;
    position: relative;
    text-align: center;
    margin: 0;
    display: block;
    cursor: pointer;
    @media screen and (max-width: 600px){
      min-width: 80px;
      min-height: 80px;
    }
`

export const Thumb = styled.img`
    height: 100%;
    width: 100%;
    transition: opacity 0.2s ease-in-out;
    transition: transform 0.3s ease-in-out;
    border-radius: 20px 20px 20px 20px;
    ${Wrapper}:hover & {
    opacity: 1;
    transform: scale(1.02);
  }
`

export const NameText = styled.div`
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    transition: transform 0.4s ease-in-out;
    margin: auto;
    padding: 14px;
    min-height: 8%;
    width: 87%;
    position: absolute;
    top: 8%;
    font-size: 1.5rem;
    background: rgba(0,0,0,0.2);
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 0px 1px 1px rgba(255,255,255,0.2);
    color: white;
    text-shadow: 1px 1px 0 black, -1px 1px 0 black,-1px -1px 0 black,1px -1px 0 black;

    ${Wrapper}:hover & {
    opacity: 1;
    transform: scale(1.02);
  }
`
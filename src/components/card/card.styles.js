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
    min-width: 240px;
    min-height: 200px;
    padding: 0;
    position: relative;
    text-align: center;
    justify-content: center;
    margin: 10px;
    display: flex;
    cursor: pointer;

    opacity: 0;
    animation: ${FadeIn} 2s ease forwards;

    @media screen and (max-width: 600px){
      min-width: 80px;
      min-height: 80px;
      padding: 2px;
      margin: 2px;
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
    transition: opacity 0.3s ease-in-out;
    transition: transform 0.1s ease-in-out;
    margin: 0 auto;
    padding: 14px;
    min-height: 8%;
    min-width: 70%;
    position: absolute;
    top: 8%;
    font-size: 1.7rem;
    background: rgba(100,0,100,0.4);
    border-radius: 20px;
    box-shadow: 0px 0px 1px 1px rgba(255,255,255,0.2);
    color: white;
    text-shadow: 1px 1px 0 black, -1px 1px 0 black,-1px -1px 0 black,1px -1px 0 black;

    ${Wrapper}:hover & {
    opacity: 1;
    transform: scale(1.02);
  }

  @media screen  and (max-width: 800px){
    font-size: 1.2rem;
    width: 84%;
  }
`
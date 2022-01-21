import styled, {keyframes} from "styled-components";

const FadeInOut = keyframes`
    from {
        opacity: 0;
        transform: scale(0.2);
    }
    50% {
        opacity: 0.2;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.2);
    }
`

export const Wrapper = styled.div<{delay: string}>`
    opacity: 0;
    min-width: 240px;
    min-height: 352px;
    padding: 0;
    position: relative;
    text-align: center;
    margin: 10px;
    display: flex;
    cursor: pointer;
    animation: ${FadeInOut} 2s infinite ease;
    animation-delay: ${props => props.delay || "0s"};
    @media screen and (max-width: 600px){
      min-width: 80px;
      min-height: 80px;
      padding: 20px;
    }
`

export const Thumb = styled.img`
    background: var(--purple);
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
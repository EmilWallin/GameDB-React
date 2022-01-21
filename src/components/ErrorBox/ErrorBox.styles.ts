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
    width: 100%;
    padding: 0;
    position: relative;
    text-align: center;
    justify-content: center;
    margin: auto;
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

export const ErrorMessage = styled.div`
    width: fit-content;
    min-height: 200px;
    background: var(--lightPurple);
    transition: opacity 0.2s ease-in-out;
    transition: transform 0.3s ease-in-out;
    border-radius: 20px 20px 20px 20px;
    ${Wrapper}:hover & {
    opacity: 1;
    transform: scale(1.02);
  }
`
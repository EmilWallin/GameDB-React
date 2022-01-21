import React from "react";
import {Wrapper,  Thumb} from './LoadingCard.styles';

type Delay = {
    delay: string
}

export const Card = ({delay} : Delay) => {
    return (
        <Wrapper delay={delay}>
            <Thumb />
        </Wrapper>
    )
}
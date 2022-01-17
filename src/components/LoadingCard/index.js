import React from "react";
import {Wrapper,  Thumb} from './LoadingCard.styles';


export const Card = ({delay}) => {
    return (
        <Wrapper delay={delay}>
            <Thumb />
        </Wrapper>
    )
}
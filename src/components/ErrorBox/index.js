import React from "react";
import {Wrapper,  ErrorMessage} from './ErrorBox.styles';


export const ErrorBox = () => {
    return (
        <Wrapper >
            <ErrorMessage>Something went wrong. Please reload the page.</ErrorMessage>
        </Wrapper>
    )
}
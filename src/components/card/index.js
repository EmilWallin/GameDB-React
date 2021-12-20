import react from "react";
import {Wrapper, TextBox, Thumb} from './card.styles';


export const Card = (props) => {
    return (
        <Wrapper>
            <Thumb src={props.cover_url} />
            <TextBox>{props.name}</TextBox>
        </Wrapper>
    )
}
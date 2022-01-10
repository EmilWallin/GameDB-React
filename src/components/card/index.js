import react from "react";
import {Wrapper, NameText, Thumb} from './card.styles';

//"//images.igdb.com/igdb/image/upload/t_thumb/co1wz4.jpg"

export const Card = ({cover_url, name}) => {
    cover_url = cover_url.replace("t_thumb", "t_cover_big")
    return (
        <Wrapper>
            <Thumb src={cover_url} />
            <NameText>{name}</NameText>
        </Wrapper>
    )
}
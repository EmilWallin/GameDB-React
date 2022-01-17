import React from "react";
import {Wrapper, NameText, Thumb} from './card.styles';
import {Link, useNavigate} from "react-router-dom";
//"//images.igdb.com/igdb/image/upload/t_thumb/co1wz4.jpg"

//placeholder img UNUSED FOR NOW
import placeholderImg from "../../images/noimage.jpg";

export const Card = ({cover_url, name, slug, game}) => {
    cover_url = cover_url.replace("t_thumb", "t_cover_big")

    const navigate = useNavigate();
    const toGamePage = () => {
        navigate(`/${slug}`, {state:game});
    }

    return (
        <Wrapper onClick={()=>{toGamePage()}}>
                <Thumb src={cover_url ? cover_url : undefined}/>
                <NameText>{name}</NameText>
        </Wrapper>
    )
}
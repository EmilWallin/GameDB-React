import React from "react";
import {Wrapper, NameText, Thumb} from './Card.styles';
import {useNavigate} from "react-router-dom";
//"//images.igdb.com/igdb/image/upload/t_thumb/co1wz4.jpg"

import { GameProp } from "../CommonTypes";

export const Card = ({game} : GameProp) => {
    game.cover.url = game.cover.url? game.cover.url.replace("t_thumb", "t_cover_big") : "";

    //Navigate to gamepage and bring gameinfo with itself
    const navigate = useNavigate();
    const toGamePage = () => {
        navigate(`/${game.slug}`, {state:game});
    }

    return (
        <Wrapper onClick={()=>{toGamePage()}}>
                <Thumb src={game.cover.url}/>
                <NameText>{game.name}</NameText>
        </Wrapper>
    )
}
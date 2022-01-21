import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Wrapper, Breadcrumb, GameArt, Content } from "./Game.styles";

import { AboutBox } from "./AboutBox";

import {Game as GameType} from "../components/CommonTypes";

export const Game = () => {
    const game = useLocation().state as GameType;
    const cover_url = game.cover.url? game.cover.url.replace("t_thumb", "t_cover_big") : "";
    return (
        <Wrapper>
            <Link to="/"><Breadcrumb>Home</Breadcrumb></Link> 
            <Content>
                <GameArt src={cover_url}/>
                <AboutBox game={game}/>
            </Content>
        </Wrapper>

    )
}
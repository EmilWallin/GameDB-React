import React from "react";
import { Wrapper, Content } from "./grid.styles";

//components
import { Card } from "../card";

export const Grid = ({games}) => {
    return (
        <Wrapper>
            <Content>
                {games.map(game => (
                    <Card  key={game.id} cover_url={game.cover ? game.cover.url : ""} name={game.name} slug={game.slug} game={game}/>
                ))
                }
            </Content>
        </Wrapper>
    )
}
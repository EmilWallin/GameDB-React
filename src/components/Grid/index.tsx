import React from "react";
import { Wrapper, Content } from "./Grid.styles";

//components
import { Card } from "../Card";
import {Game} from "../CommonTypes";

type Games = {
    games: Array<Game>
}

export const Grid = ({games} : Games) => {
    return (
        <Wrapper>
            <Content>
                {games? games.map((game) => (
                    <Card  key={game.id} game={game}/>
                ))
                :
                ""
                }
            </Content>
        </Wrapper>
    )
}
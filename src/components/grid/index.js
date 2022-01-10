import React from "react";
import { Wrapper, Content } from "./grid.styles";

//components
import { Card } from "../card";

const GetCards = (games) => {
    if(games === undefined) return (<div>no cards</div>);

    let cards;
    games.map(g => (
        cards += (<Card ></Card>)
    ))
    return cards;
}

export const Grid = ({games}) => {
    return (
        <Wrapper>
            <Content>
                {games.map(game => (
                    <Card  key={game.id} cover_url={game.cover.url} name={game.name}/>
                ))
                }
            </Content>
        </Wrapper>
    )
}
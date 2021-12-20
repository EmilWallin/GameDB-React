import react from "react";
import { Wrapper, Content } from "./grid.styles";

//components
import { Card } from "../card";

const GetCards = (games) => {
    if(games === undefined) return (<div>no cards</div>);

    let cards;
    games.map(function(g) {
        cards += (<Card key={g.id} cover_url={g.cover_url} name={g.name}></Card>)
    })
}

export const Grid = (props) => {
    return (
        <Wrapper>
            <Content>
                { GetCards(props.games)}
            </Content>
        </Wrapper>
    )
}
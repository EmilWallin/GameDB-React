import React from "react";

import { Wrapper, Title, Summary, RatingBox, InfoBox} from "./AboutBox.styles";


export const AboutBox = ({game}) => {
    return (
        <Wrapper>
            <Title>{game.name}</Title>
            <Summary>{game.summary}</Summary>
        <RatingBox>
            {game.total_rating.toFixed(1)}
        </RatingBox>
        <InfoBox>
            {game.release_dates[0].human}
        </InfoBox>
        <InfoBox>
            {game.platforms.map((p,i) => (
                (p.abbreviation ? p.abbreviation : 
                    (p.alternative_name ? p.alternative_name : p.name))
                + (i+1 === game.platforms.length ? "" : ", ")))}
        </InfoBox>
        {game.genres.length > 0 && (<InfoBox>
            {game.genres.map((g,i) => (
                g.name + (i+1 === game.genres.length ? "" : ", ")))}
        </InfoBox>)}
    </Wrapper>
    )
}
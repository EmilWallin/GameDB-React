import React from "react";
import { useEffect, useState } from "react";
//import axios from 'axios';

import { FetchGamesList } from "../components/APICall";
import {Token, Game} from "../components/CommonTypes"

//Types
type GamesSearch = {
    data: Array<GameNested>
}
type GamesHome = {
    data: Array<Game>
}
type GameNested = {
    game: {
        name: string,
        summary: string,
        total_rating: number,
        total_rating_count: number,
        release_dates: [{human: string}],
        platforms: [{abbreviation: string, alternative_name: string, name: string}],
        genres: [{name: string}],
        cover: {url: string},
        slug: string,
        artworks: [{url: string}]
    }
    id: number,
}

//Init token
const initialToken = {
    "access_token": "",
    "expires_in": 0,
    "token_type": ""
}

export const useFetchGames = (token : Token, search = "") => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [games, setState] = useState<Array<Game>>();
    const [loading, setLoading] = useState(false);

    const fetchGames = async (searchT = "") => {
        try {
            setLoading(true);
            if(searchT !== "") {
                const games = await FetchGamesList(token.access_token, searchT) as GamesSearch;
                const gamesArr : Array<Game> = games.data.map(g => ({
                                        name: g.game.name, 
                                        cover: g.game.cover,
                                        platforms: g.game.platforms,
                                        id: g.id,
                                        release_dates: g.game.release_dates,
                                        total_rating: g.game.total_rating,
                                        total_rating_count: g.game.total_rating_count,
                                        artworks: g.game.artworks,
                                        summary: g.game.summary,
                                        slug: g.game.slug,
                                        genres: g.game.genres
                                        }))
                setState([...gamesArr])
            } else {
                const games = await FetchGamesList(token.access_token, searchT) as GamesHome;
                const gamesArr : Array<Game> = games.data;
                setState([...gamesArr]);
            }
            setError(false);
        } catch (error) {
            console.log("error in fetchGames");
            console.log(error);
            setError(true);
        }
        setLoading(false)
    };

    useEffect(() => {
        if(token.access_token === "") return;

        fetchGames();
    }, [token]);

    useEffect(() => {
        if(token.access_token === "") return;
        if(searchTerm !== "") {
            fetchGames(searchTerm);
        } else {
            fetchGames();
        }

    }, [searchTerm])

    return {games, searchTerm, setSearchTerm, error, loading};
};

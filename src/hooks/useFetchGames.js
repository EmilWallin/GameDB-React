import React from "react";
import { useEffect, useState } from "react";
//import axios from 'axios';

import { FetchGamesList } from "../components/APICall";

const initialState = [
        {
            "id": 0,
            "cover": {
                "id": 0,
                "url": ""
            },
            "name": "",
            "platforms": [
                0
            ],
            "release_dates": [
                0
            ],
            "total_rating": 0,
            "total_rating_count": 0
        }
    ]

export const useFetchGames = (token, search) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [games, setState] = useState([]);

    const fetchGames = async (searchT = "") => {
        try {
            console.log("Search term: " + searchTerm)

            const games = await FetchGamesList(token.access_token, searchT);

            if(searchT !== "") {
                console.log(games);
                const gamesArr = games.data.map(g => ({
                                        name: g.game.name, 
                                        cover: g.game.cover,
                                        platforms: g.game.platforms,
                                        id: g.id,
                                        release_dates: g.game.release_dates,
                                        total_rating: g.game.total_rating,
                                        total_rating_count: g.game.total_rating_count,
                                        }))
                setState([...gamesArr])
            } else {
                setState([...games.data]);
            }
        } catch (error) {
            console.log("error in fetchGames");
            console.log(error);
            setError(true);
        }
    };

    useEffect(() => {
        if(token.access_token == "") return;

        fetchGames();
    }, [token]);

    useEffect(() => {
        console.log("In useeffect: " + searchTerm);
        if(searchTerm !== "") {
            fetchGames(searchTerm);
        } else {
            fetchGames();
        }

    }, [searchTerm])

    return {games, searchTerm, setSearchTerm, error};
};

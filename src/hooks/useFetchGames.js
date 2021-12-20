import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
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
    const [state, setState] = useState(initialState);

    const fetchGames = async () => {
        try {
            const games = await FetchGamesList(token.access_token, searchTerm);

            setState(prev => ({
                ...games
            }))

        } catch (error) {
            console.log("error in fetchGames");
            setError(true);
        }
    };

    useEffect(() => {
        if(token.access_token == "") return;
        if(!searchTerm) fetchGames();

        fetchGames();
    }, [searchTerm, token]);

    return {state, searchTerm, setSearchTerm, error};
};

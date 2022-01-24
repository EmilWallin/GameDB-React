import React from "react";
//import { useState } from "react";
import { Wrapper, Content, SearchText, NoResult }from "./home.styles";

//hooks
import { useGetAuthToken } from "../hooks/useGetAuthToken";
import { useFetchGames } from "../hooks/useFetchGames";

//Components
import { Grid } from "./Grid";
import { SearchBar } from "./SearchBar";
import { LoadingGrid } from "./LoadingGrid";
import { ErrorBox } from "./ErrorBox";

//Types
import {Game} from "../components/CommonTypes"

const Home = () => {
    //const [token, setToken] = useState(initialToken);

    const token = useGetAuthToken();
    
    const {games, searchTerm, setSearchTerm, error, loading} = useFetchGames(token);

    return (
        <Wrapper>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <SearchText>{ searchTerm? "Search Results" : "Popular Games" }</SearchText>
            <Content>
                {error && <ErrorBox/> }
                {loading && <LoadingGrid/>}
                {(!Array.isArray(games) || !games.length) && !loading && !error ? (<NoResult>No Results Found</NoResult>) :<Grid games={games as Array<Game>}/>}
                

                
            </Content>
        </Wrapper>
    )
}

export default Home;
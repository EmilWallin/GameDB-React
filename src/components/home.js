import react from "react";
import { useState } from "react";
import { Wrapper, Content }from "./home.styles";

//hooks
import { useGetAuthToken } from "../hooks/useGetAuthToken";
import { useFetchGames } from "../hooks/useFetchGames";

//Components
import { Grid } from "./grid";

const initialToken = {
    "access_token": "",
    "expires_in": 0,
    "token_type": ""
}

const Home = () => {
    const [token, setToken] = useState(initialToken);

    useGetAuthToken(setToken);
    const {games, searchTerm, setSearchTerm, error} = useFetchGames(token);
    return (
        <Wrapper>
            <Content>
                <Grid games={games}/>
            </Content>
        </Wrapper>
    )
}

export default Home;
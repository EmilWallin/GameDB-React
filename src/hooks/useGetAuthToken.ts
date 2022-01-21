import {useEffect, useState} from 'react';
//import axios from 'axios';

import { FetchToken } from '../components/APICall';

import {Token} from "../components/CommonTypes"

const initialToken : Token = {
    access_token: "",
    expires_in: 0,
    token_type: ""
}

export const useGetAuthToken = () => {
    const [token, setToken] = useState<Token>(initialToken);

    const GetToken = async () => {
        try {
            const tokenFetched = await FetchToken() as unknown as Token;
            setToken(tokenFetched);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetToken();
    }, [])

    return token
}
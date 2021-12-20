import {useEffect, useState} from 'react';
//import axios from 'axios';

import { FetchToken } from '../components/APICall';



export const useGetAuthToken = (setToken) => {
    // const [token, setToken] = useState(initialToken);

    const GetToken = async () => {
        try {
            const token = await FetchToken();
            setToken(token);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetToken();
    }, [])
}
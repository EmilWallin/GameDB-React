import React, { useState, useEffect, useRef } from "react";
import {Wrapper, Search} from './SearchBar.styles';

type SetSearch = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}


export const SearchBar = ({setSearchTerm} : SetSearch ) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    //Initial render + update 0.5s after updated search
    useEffect(() => {
        if(initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer);
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Search 
            placeholder="Search"
            type="text"
            onChange={event => setState(event.currentTarget.value)}
            value={state}
            ></Search>
        </Wrapper>
    )
}
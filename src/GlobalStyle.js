import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {

        //Colors
        --purple: #A02CA8;
        --lightPurple: #EA59F5;
        --yellow: #F5D571;
        --cyan: #40F5CD;
        --darkCyan: #34A88F;

        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;

        //Sizes
        --maxWidth: 1280px;
        --maxInfoWidth: 980px;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }
`
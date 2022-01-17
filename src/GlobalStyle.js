import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {

        //Colors
        --offWhite: #F8EFD0;
        --darkModeBG: #180f2e;
        --darkerPurple: #301b55;
        --purple: #4a386b;
        /*         --purple: #571e72; */
        --lightPurple: #de77e6;
        --lightPurpleTransparent: rgba(222, 119, 239, 0.4);
        --yellow: #F5D571;
        --cyan: #40F5CD;
        --darkCyan: #34A88F;

        --gameShadow: #40004F;

        --titleShadow: rgba(150,50,150,0.1);

        --white: #fff;
        --lightGray: #ece;
        --medGray: #353535;
        --darkGray: #1c1c1c;

        //Sizes
        --maxWidth: 1280px;
        --maxInfoWidth: 980px;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }
`
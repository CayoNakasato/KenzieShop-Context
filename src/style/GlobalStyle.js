import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
    }

    :root{
        --darkblue: #141259;
        --blue: #204F8C;
        --black: #232526;
        --darkgray: #878A8C;
        --gray: #B0BBBF;
    }
`;

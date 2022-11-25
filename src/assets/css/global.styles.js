import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
            box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #F9E9D2;
        
        font-family: 'Roboto', sans-serif;
        color: #591708;
    }

    h2 {
        font-family: 'Bebas Neue', cursive;
    }
`;

export default GlobalStyles;

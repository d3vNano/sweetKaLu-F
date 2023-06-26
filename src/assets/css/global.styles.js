import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
            box-sizing: border-box;
    }

    body {
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

    a {
        text-decoration: none;
    }

    .swal-overlay {
        background-color: rgba(0, 0, 0, 0.75);
    }

`;

export default GlobalStyles;

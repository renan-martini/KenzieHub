import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    *{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
        &:hover{
            filter: brightness(1.2);
        }
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 700;
    }

    button, span {
        font-weight: 600;
    }

    p {
        font-weight: 400;
    }
`;

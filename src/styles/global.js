import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-family: 'Outfit', sans-serif;
        padding: 0 15%;
    }
`;

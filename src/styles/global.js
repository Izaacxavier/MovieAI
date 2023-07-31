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
        padding: 0 20%;
    }

    @media (max-width: 1550px){
        body{
        padding: 0 10%;
    }
    }
    @media (max-width: 1158px){
        body{
        padding: 0 5%;
    }
    }

    @media (max-width: 700px){
    
    html{
      font-size: 14px;
     
    }

  } 
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.section`
  display: flex;
  padding-top: 4rem;


  > img {
    max-width: 20rem;
    margin-right: 10%;
    border-radius: 8px;
  }
`;
export const MovieDatails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.WHITE};

  .title_movie{
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 2rem;
      line-height: 140%;

      span{
        font-size: 2rem;
        line-height: 140%;

      }
  }
  .details{
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 4rem;

    >span{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 1rem;
        padding-top: 10px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_600};

        > svg{
            font-size: 1rem;
        }
    }

    >span:nth-last-child(-n+3)::before{
        content: "▲";
        color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }
  }

  .sinopse{
      width: 100%;

      h3{
          font-size: 1.25rem;
          padding-bottom: 10px;
      }
      p {
        font-size: 1.125rem;
  }
  }
 

`;

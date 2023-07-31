import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.section`
  display: flex;
  padding-top: 4rem;
  gap: 10%;

  @media (max-width: 740px){
        flex-direction: column;
        gap: 40px;
        align-items: center;
    }
`;
export const MovieDatails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.WHITE};

  .title_movie {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 2rem;
    line-height: 140%;

    span {
      font-size: 2rem;
      line-height: 140%;
    }
  }

  @media (max-width: 740px){
        padding-bottom: 32px;
    }
`;
export const ContentDetails = styled.div` 
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 1rem;

    > span {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 1rem;
      padding-top: 10px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

      > svg {
        font-size: 1rem;
      }
    }

    > span:nth-last-child(-n + 3)::before {
      content: "▲";
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
`

export const ContentPoster = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  gap: 10px;

  > img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const ContentButton = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  button:first-child {
    width: 80%;
  }
  button:last-child {
    width: 20%;
  }
`;

export const TagLine = styled.div`
  display: flex;
  padding: 12px 0;
  font-family: "Outfit", sans-serif;
  font-weight: 100;
  font-size: 1.25rem;
  font-style: italic;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;
export const ContentSinopse = styled.div`
  width: 100%;

  h3 {
    font-size: 1.25rem;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  p {
    font-size: 1.125rem;
    font-weight: 100;
  }
`;

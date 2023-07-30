import styled from "styled-components";

export const Container = styled.div`
  width: 18.75rem;
  height: 100%;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > h1 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 120%;
  }
  > span {
    display: flex;
    font-size: 1rem;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.YELLOW};
    font-weight: 600;

    > img{
        margin-right: -10px;
    }
  }
`;
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    > img{
        width: 18.75rem;
    }

    .info{
        display: flex;
        padding: 20px 0;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        align-items: center;
        justify-content: space-between;

        > span{
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 1rem;    
        }

    }
`;
export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const ContainerButtonSinopse = styled.div `
    width: 80%;
`;
export const ContainerButtonShared = styled.div `
    width: 20%;
`;
export const ContainerButton = styled.div `
    display: flex;
    gap: 5px;
`;

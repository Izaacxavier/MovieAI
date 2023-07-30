import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 14rem;
  height: 3rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  gap: 8px;
  cursor: pointer;
  background: rgb(131, 35, 255);
  background: linear-gradient(
    90deg,
    rgba(131, 35, 255, 1) 0%,
    rgba(255, 45, 175, 1) 100%
  );

  &:hover{
    filter: brightness(1.2);
  }
  &:disabled{
    opacity: 0.5;
    
    &:hover{
    filter: none;
  }
  }

  > svg {
    width: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > span {
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

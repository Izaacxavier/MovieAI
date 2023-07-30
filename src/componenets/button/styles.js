import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    line-height: 140%;
    font-weight: 400;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    justify-content: center;
    gap: 8px;
    line-height: 140%;
    font-size: 1rem; 
    cursor: pointer;
    transition: all .5s;
    
     > img{
        width: 30px;
    }

    &.variantStyles{
        border-radius: 12px;
    }

    &:hover{
        filter: brightness(1.2);
    }
    
`
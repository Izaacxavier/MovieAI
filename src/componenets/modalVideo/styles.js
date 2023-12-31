import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.2); 

    @media (max-width: 750px){
        background: rgba(0, 0, 0, 0.2);
    }
`

export const Content = styled.div`
    width: 37.5rem;
    display: flex;
    justify-content: center;

    @media (max-width: 750px){
        width: 100%;
        padding: 12px;
    }
`
import styled from 'styled-components' 


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
export const Content = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    gap: 5px;

    @media (max-width: 1035px){
        flex-direction: column;
    }
`


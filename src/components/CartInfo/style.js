import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 10px;

    width: 90vw;
    max-width: 500px;
    
    height: 15vh;
    
    margin: 0 auto;

    margin-top: 7rem;
    
    gap: 2vh;

    background-color: #232526;

    h2{
        color: #204F8C;
        font-size: 1.5rem;
    }

    span{
        font-size: 1.5rem;
        font-weight: 700;

        color: #878A8C;
    }
`
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: solid medium #87f1ff;
    border-radius: 10px;
    margin: 10px auto 50px;
    width: 500px;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div:first-of-type {
        justify-content: center;
    }
`;
import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 20px;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: solid medium #87f1ff;
    border-radius: 10px;
    margin: 10px auto 50px;
    width: 500px;
    max-width: 90vw;

    label {
        display: block;
        margin: 10px 0 0;
    }
    select {
        display: block;
        width: 100%;
        margin: 0 0 10px;
        background: rgba(0, 0, 0, 0.2);
        border: none;
        border-bottom: thin solid black;
        color: white;
    }
    option {
        color: black;
    }
`;
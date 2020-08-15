import styled from 'styled-components';

export const StyledWrapper = styled.div`
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
    .buttons {
        display: flex;
        flex-direction: row;
    }
`;
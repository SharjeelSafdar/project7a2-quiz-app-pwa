import styled from 'styled-components';

export const Wrapper = styled.div`
    .qNum, .category, .type, .difficulty {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .score {
        text-align: center;
    }
    .qStatement {
        text-align: center;
        margin: 10px auto;
    }
`;

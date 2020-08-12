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

    .heading {
        font-size: 2rem;
        text-align: center;
    }
    .score {
        text-align: center;
    }
    .qDiv {
        margin: 20px 0;
    }
    .qNum {
        text-align: center;
    }
    .qStatement {
        text-align: center;
        margin: 10px auto;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: minmax(40px, fit-content);
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
            correct
                ? 'linear-gradient(90deg, #56ffa4, #59bc86)' // Correct Answer: Green
                : userClicked
                    ? 'linear-gradient(90deg, #ff5656, #c16868)' // False Answer: Red
                    : 'linear-gradient(90deg, #56ccff, #6eafb4)' // Option neither selected not correct: Blue
        };
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`;
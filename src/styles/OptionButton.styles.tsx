import styled from 'styled-components';

type OptionButtonProps = {
    correct: boolean;
    userClicked: boolean;
};

const OptionButton = styled.div<OptionButtonProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
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

export default OptionButton;
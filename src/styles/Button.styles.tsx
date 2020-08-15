import styled from 'styled-components';

const Button = styled.button`
    display: block;
    cursor: pointer;
    user-select: none;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); 
    border-radius: 10px;
    height: 40px;
    margin: 25px auto 10px;
    padding: 0 30px;
    transition: opacity 0.3s ease;
    :hover {
        opacity: 0.8;
    }
`;

export default Button;
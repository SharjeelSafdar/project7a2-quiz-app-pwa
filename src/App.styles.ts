import styled, { createGlobalStyle } from 'styled-components';
import bgImage1 from './images/bg_image_1.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${bgImage1});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    #root {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Title = styled.h1`
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;

    @media (max-width: 580px) {
        font-size: 45px;
    }

    @media (max-width: 400px) {
        font-size: 36px;
    }
`;
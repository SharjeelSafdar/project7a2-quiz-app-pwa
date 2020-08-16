import { createGlobalStyle } from 'styled-components';
import bgImage1 from '../images/bg_image_1.jpg';

const GlobalStyle = createGlobalStyle`
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
    @font-face { 
        font-family: 'Catamaran'; 
        font-style: normal; 
        font-weight: 700; 
        src: url('/fonts/catamaran-v7-latin-700.eot'); 
        src: url('/fonts/catamaran-v7-latin-700.eot?#iefix') format('embedded-opentype'), 
            url('/fonts/catamaran-v7-latin-700.woff2') format('woff2'), 
            url('/fonts/catamaran-v7-latin-700.woff') format('woff'), 
            url('/fonts/catamaran-v7-latin-700.ttf') format('truetype'), 
            url('/fonts/catamaran-v7-latin-700.svg#Catamaran') format('svg'); 
    }
    @font-face { 
        font-family: 'Fascinate Inline'; 
        font-style: normal; 
        font-weight: 400; 
        src: url('/fonts/fascinate-inline-v10-latin-regular.eot'); 
        src: local('Fascinate Inline'), 
            local('FascinateInline-Regular'), 
            url('/fonts/fascinate-inline-v10-latin-regular.eot?#iefix') format('embedded-opentype'), 
            url('/fonts/fascinate-inline-v10-latin-regular.woff2') format('woff2'), 
            url('/fonts/fascinate-inline-v10-latin-regular.woff') format('woff'), 
            url('/fonts/fascinate-inline-v10-latin-regular.ttf') format('truetype'), 
            url('/fonts/fascinate-inline-v10-latin-regular.svg#FascinateInline') format('svg'); 
    }
`;

export default GlobalStyle;
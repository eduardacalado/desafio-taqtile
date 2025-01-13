import { createGlobalStyle } from 'styled-components';

import fonts from 'google-fonts';

fonts.add({
  Rubik: ['400', '500', '600', '700'],
});

export const GlobalStyles = createGlobalStyle`
    html,
    body{
        padding: 0;
        margin: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-ssmoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Rubik', sans-serif;
        background: #F4F5F6;
        min-height: 100vh;
    }

    * {
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

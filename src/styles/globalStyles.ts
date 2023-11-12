'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: color, background .2s ease-in-out;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    body {
        color: ${({ theme }) => theme.palette.text.primary};
        background: ${({ theme }) => theme.palette.background.default};
    }
`;

export default GlobalStyles;
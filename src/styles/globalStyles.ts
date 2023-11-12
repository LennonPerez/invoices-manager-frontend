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
        color-scheme: ${({ theme }) => theme.palette.type};
        max-width: 100vw;
        overflow-x: hidden;
    }

    body {
        color: ${({ theme }) => theme.palette.text.primary};
        background: ${({ theme }) => theme.palette.background.default};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.palette.text.primary};
        font-weight: 700;
    }

    p{  
        color: ${({ theme }) => theme.palette.text.secondary};
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 0.9375rem;
        letter-spacing: -0.01563rem;
    }
`;

export default GlobalStyles;
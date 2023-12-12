"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: color, background 0.2s ease-in-out;
        font-family: var(--main-font);

        &::-webkit-scrollbar {
            background-color: ${({ theme }) => theme.page.background};
            width: 0.5rem;
        }

        &::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.page.background};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.page.scrollbarThumb};
            border-radius: 0.25rem;
        }
    }

    html,
    body {
        color-scheme: ${({ theme }) => theme.type};
        max-width: 100vw;
        overflow-x: hidden;
    }

    body {
        color: ${({ theme }) => theme.palette.text.primary};
        background: ${({ theme }) => theme.page.background}
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.palette.text.primary};
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.03906rem;
    }

    p, label, span {  
        color: ${({ theme }) => theme.palette.text.secondary};
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 0.9375rem;
        letter-spacing: -0.01563rem;
    }
`;

export default GlobalStyles;

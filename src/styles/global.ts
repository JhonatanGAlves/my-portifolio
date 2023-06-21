"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --white: ${({ theme }) => theme["--white"]};
        --gray-100: ${({ theme }) => theme["--gray-100"]};
        --gray-500: ${({ theme }) => theme["--gray-500"]};
        --gray-800: ${({ theme }) => theme["--gray-800"]};
        --bg-linear-1: ${({ theme }) => theme["--bg-linear-1"]};
        --bg-linear-2: ${({ theme }) => theme["--bg-linear-2"]};
        --detail: ${({ theme }) => theme["--detail"]};
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    
    background: linear-gradient(180deg, var(--bg-linear-1) 0%, var(--bg-linear-2)100%);;
    color: ${({ theme }) => theme["--gray-100"]};
    -webkit-font-smoothing: antialiased;    
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
  }
`;

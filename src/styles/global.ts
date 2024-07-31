import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    margin: 0 auto;
    width: 70rem;
  }
  
  .titleXL {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
  }

  .titleL {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }

  .titleM {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }

  .titleS {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .titleXS {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
  }

  .textL {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
  }

  .textM {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  .textS {
    line-height: 130%;
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }

  .textXS {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .tag {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-family: "Roboto", sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
  }

  .buttonG {
    color: ${(props) => props.theme['base-button']};
    line-height: 160%;
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
  }

  .buttonM {
    color: ${(props) => props.theme['base-button']};
    line-height: 160%;
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
  }
`
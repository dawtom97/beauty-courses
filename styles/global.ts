import { createGlobalStyle } from 'styled-components';


type GlobalStylesProps = {
    body:string,
    text:string
}


export const GlobalStyles = createGlobalStyle<{theme:GlobalStylesProps}>`

   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;
    }

    ::placeholder, input, textarea {
        font-family:'Montserrat',sans-serif;
        color:${props=>props.theme.text};
    }
    input[type="text"], textarea {
        font-family:'Montserrat',sans-serif;
        color:${props=>props.theme.text};
        font-size: 1.4rem;
    }

    body {
        font-family:'Montserrat',sans-serif;
        background-color: ${props=>props.theme.body};
        color:${props=>props.theme.text};
    }
    a {
        text-decoration: none;
        color:${props=>props.theme.text};
    }
`
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
${normalize}

@font-face {
  font-family: 'Source Sans Pro';
  src: url(../assets/fonts/SourceSansPro-Regular.ttf) format('truetype'),
}

body{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    background-color: ${theme.colors.darkerWhite};
    letter-spacing: 0.36px;
    font-family: 'Source Sans Pro', sans-serif;
    


}

#root{
    width: 100%;
    max-width: 900px;
}


`;

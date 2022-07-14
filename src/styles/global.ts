import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primaryText};
    font: 400 1rem Lato, sans-serif;
  }

  .main{
    display: flex;
    flex-direction: row;
    margin: auto;
    padding: 2.4rem;
    justify-content: center;
  }

`

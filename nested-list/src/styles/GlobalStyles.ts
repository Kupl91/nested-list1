import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
  }

  ul {
    list-style-type: none;
    padding-left: 20px;
  }

  button {
    margin-left: 5px;
    padding: 5px 10px;
    border: none;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }

  button.delete {
    background-color: #dc3545;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default GlobalStyles;
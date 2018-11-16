import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  }
`;
class App extends Component {
  render() {
    return (
      <React.Fragment>
        hello
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import logo from './logo.svg';
import './App.css';
import * as S from "./styles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <S.Container className="container">
        <S.Header area="fisica">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <S.NossoBotao sucesso>Nosso botao</S.NossoBotao>
        </S.Header>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
import React from "react";
import { render, hydrate } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GlobalStyle from "./GlobalStyle";
const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </Provider>,
    rootElement,
  );
} else {
  render(
    <Provider store={store}>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </Provider>,
    rootElement,
  );
}

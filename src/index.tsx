import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Navbar } from "./components";
import React from "react";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RecoilRoot>
      <Router>
        <GlobalStyle />
        <Navbar />
        <App />
      </Router>
    </RecoilRoot>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

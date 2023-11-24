import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

// const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
// const string = "HELLOc1";
// console.log(regex.test(string));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

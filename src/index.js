import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root") || document.createElement("div");

const render = (Component) => {
  ReactDOM.createRoot(root).render(<Component />);
};

render(App);

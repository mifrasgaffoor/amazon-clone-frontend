import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    {/*reducer is function,not a comp */}
    <App />
  </StateProvider>,
  document.getElementById("root")
);

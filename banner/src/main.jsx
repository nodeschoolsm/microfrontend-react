import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MessageBus } from "@podium/browser";

const messageBus = new MessageBus();

messageBus.subscribe("box", "message", (event) => {
  if (event.payload === "unmount") {
    ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
  } else {
    ReactDOM.render(<App />, document.getElementById("banner"));
  }
});

ReactDOM.render(<App />, document.getElementById("banner"));

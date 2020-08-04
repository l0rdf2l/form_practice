import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import MainForm from "./MainForm";
import Progress from "./Progress";
import Result from "./Result";

import "./App.css";

createStore({
  data: {}
});

function App() {
  return (
    <StateMachineProvider>
      <DevTool />
      <Router>
        <Route exact path="/" component={MainForm} />
        <Route exact path="/progress" component={Progress} />
        <Route exact path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

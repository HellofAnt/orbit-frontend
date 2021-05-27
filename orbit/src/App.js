import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Routine from "./views/Routine";
import Challenge from "./views/Challenge";
import Calendar from "./views/Calendar";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Routine} />
      <Switch>
        <Route path="/orbit" component={Routine} />
        <Route path="/routine" component={Routine} />
        <Route path="/challenge" component={Challenge} />
        <Route path="/calendar" component={Calendar} />
      </Switch>
    </div>
  );
}

export default App;
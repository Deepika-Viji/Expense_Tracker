//React Router DOM
import React from "react";
import Dashboard from "./screen/Dashboard";
import Income from "./components/Income";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route>
        <Route path="/" exact component={Dashboard} />
        <Route path="/income" exact component={Income} />
      </Route>
    </Router>
  );
};
export default App;

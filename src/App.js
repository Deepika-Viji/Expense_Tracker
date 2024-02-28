//React Router DOM
import React from "react";
import Dashboard from "./screen/Dashboard";
import Auth from "./components/Auth/Auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
};
export default App;

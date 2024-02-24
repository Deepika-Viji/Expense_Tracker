//React Router DOM
import React from "react";
import Dashboard from "./screen/Dashboard";
import Income from "./components/Income";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Datefield from "./components/Date_field";
const App = () => {
  return (
    <Router>
      <Route>
        <Route path="/" exact component={Dashboard} />
        <Route path="/income" exact component={Income} />
        <Route path="/datefield" exact component={Datefield} />
      </Route>
    </Router>
  );
};
export default App;

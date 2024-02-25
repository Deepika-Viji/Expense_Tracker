//React Router DOM
import React from "react";
import Dashboard from "./screen/Dashboard";
import Add_transaction from "./components/Add_transaction";
import Auth from "./components/Auth/Auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Datefield from "./components/Date_field";
import Recent_transaction from "./components/Recent_transaction";
import Search from "./components/Search";
const App = () => {
  return (
    <Router>
      <Route>
        <Route path="/" exact component={Auth} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/add_transaction" exact component={Add_transaction} />
        <Route path="/datefield" exact component={Datefield} />
        <Route
          path="/recent_transaction"
          exact
          component={Recent_transaction}
        />
      </Route>
      <Route path="/search" exact component={Search} />
    </Router>
  );
};
export default App;

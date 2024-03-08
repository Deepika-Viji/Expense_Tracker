import React, { useEffect, useState } from "react";
import Dashboard from "./screen/Dashboard";
import Auth from "./components/Auth/Auth";
import DashboardTable from "./components/DashboardTable";
import { BrowserRouter as Router, Route } from "react-router-dom";
const DesktopMessage = () => (
  <div className="h-screen flex flex-col justify-center items-center">
    <div className="text-center p-4 text-red-700 font-extrabold font-LoginFont">
      Please open the site in a desktop-sized screen.
    </div>
  </div>
);
const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1300);
      // setIsDesktop(window.innerWidth >= 1240);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router>
      {isDesktop ? (
        <Route>
          <Route path="/" exact component={Auth} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboardtable" exact component={DashboardTable} />

        </Route>
      ) : (
        <DesktopMessage />
      )}
    </Router>
  );
};
export default App;



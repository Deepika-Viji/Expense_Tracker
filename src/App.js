// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard.js";
// const App = () => {
//   return (
//     <div className="flex">
//       <div className="basis-[20%] h-[100vh] border">
//         <Sidebar />
//       </div>
//       <div className="basis-[80%] border bg-blue-color">
//         <Dashboard />
//       </div>
//     </div>
//   );
// };

// export default App;

//React Router DOM
import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Route>
        <Route path="/" exact component={Dashboard} />
        <Route path="/sidebar" exact component={Sidebar} />
      </Route>
    </Router>
  );
};

export default App;

{
  /* <Router>
      {isDesktop ? ( // Check if the screen size is desktop
        <Route>
          <Route path="/" exact component={Login} />
          <Route path="/mainscreen" exact component={Mainscreen} />
          <Route path="/excel-data" exact component={ExcelDisplay} />
          <Route path="/generate-id-card" exact component={GenerateIDCard} />
        </Route>
      ) : (
        <DesktopMessage /> // Display the message for smaller screens
      )}
    </Router> */
}

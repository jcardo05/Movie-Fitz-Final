import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserProvider from "./providers/UserProvider";


function App() {
  return (
      <UserProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Routes>
          </div>
        </Router>
      </UserProvider>

  );
}

export default App;

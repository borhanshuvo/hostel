import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import RequireAuth from "./components/requirAuth";
export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="overflow-hidden">
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;

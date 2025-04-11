import React from "react";

import AuthParent from "./Pages/Auth/AuthParent";
import { Route, Routes } from "react-router-dom";

import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<AuthParent />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

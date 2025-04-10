import React from "react";
import Login from "./Pages/Auth/Login";
import AuthParent from "./Pages/Auth/AuthParent";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./Components/empty";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<AuthParent />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/lo" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;

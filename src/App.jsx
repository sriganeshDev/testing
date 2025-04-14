import React from "react";

import AuthParent from "./Pages/Auth/AuthParent";
import { Route, Routes } from "react-router-dom";

import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import CommonMenu from "../src/Pages/Com-HeaderandFooter/CommonMenu";
import UserDashboard from "./Pages/AdminAndUserDashboard/UserDashboard";
import AdminDashboard from "./Pages/AdminAndUserDashboard/AdminDashboard";

const App = () => {
  return (
    <>
      <Routes>
        {/*  */}
        <Route path={"/"} element={<AuthParent />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Dashboard */}
        <Route path="/commonMenu" element={<CommonMenu/>}>
  <Route index element={<AdminDashboard/>} />
  <Route path="userDashboard" element={<UserDashboard/>} />
  <Route path="admindashboard" element={<AdminDashboard/>} />
</Route>


      
      </Routes>
    
       
    </>
  );
};

export default App;

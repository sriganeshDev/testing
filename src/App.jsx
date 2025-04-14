import React from "react";

import AuthParent from "./Pages/Auth/AuthParent";
import { Route, Routes } from "react-router-dom";

import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import OnBoardScreen1 from "./Components/OnboardingScreen/OnBoardScreen2";
import OnBoardLoading from "./Components/OnboardingScreen/OnBoardLoading";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnBoardScreen1 />} />
        <Route path="/login" element={<AuthParent />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* <Route path="/s1" element={<OnBoardLoading />} /> */}
      </Routes>
    </>
  );
};

export default App;

import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Calculator from "./pages/Calculator";
import Conversor from "./pages/Conversor";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/calc" />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/conv" element={<Conversor />} />
      </Routes>
    </Fragment>
  );
};

export default App;

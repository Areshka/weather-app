import React from "react";
import AppRouter from "./AppRouter";
import Navbar from "../../components/Navbar";

const Application = () => {
  return (
    <div className="container">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default Application;

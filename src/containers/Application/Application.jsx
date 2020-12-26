import React from "react";

import AppRouter from "./AppRouter";
import Alert from "../../components/Alert";
import Navbar from "../../components/Navbar";

const Application = () => {
  return (
    <div className="container">
      <Navbar />
      <Alert />
      <AppRouter />
    </div>
  );
};

export default Application;

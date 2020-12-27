import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import store from "../../store/store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <HashRouter>{children}</HashRouter>
    </Provider>
  );
};

export default Layout;

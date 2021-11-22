import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Root";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { Home } from "../Pages/Home";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route Component={Home} path="/home" />
      <Route Component={LandingPage} path="/*" />
    </Routes>
  </BrowserRouter>
);

export default Router;

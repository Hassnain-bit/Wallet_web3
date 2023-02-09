import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import "./css/assets-owl.carousel.css";
import "./css/assets-owl.theme.default.css";
import "./css/css-app.css";
import "./css/css-bootstrap.min.css";
import "./css/css-select2.min.css";
import "./css/css-toastr.min.css";
import "./css/fonts-fonts.css";
import "./css/fonts-remixicon.css";
import "./css/stmicons-stmicons.css";
import Home from "./pages/Home";
import Rectify from "./pages/Rectify";

function App() {
  return (
    <div>
      <Loader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rectify" element={<Rectify />} />
      </Routes>
    </div>
  );
}

export default App;

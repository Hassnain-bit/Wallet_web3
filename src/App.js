import { Route, Routes } from "react-router-dom";
import "./App.css";
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
import Page2 from "./pages/Page2";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2/>} />
      </Routes>
    </div>
  );
}

export default App;

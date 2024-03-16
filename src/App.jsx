import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index";
import Shopping from "./pages/Shopping";
import About from "./pages/About/index";
import DeliveryPage from "./pages/DeliveryPage";
import CheckListPage from "./pages/CheckListPage/checklist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/checklist" element={<CheckListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

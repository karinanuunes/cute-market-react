import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import CheckListPage from "./pages/CheckListPage/checklist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checklist" element={<CheckListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

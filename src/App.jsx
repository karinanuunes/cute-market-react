import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

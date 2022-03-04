import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/Home";
import AboutScreen from "./screens/About";
import ResumeBuilder from "./screens/BuildResume";
import Navbar from "./components/Navbar";
import _404 from "./screens/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/build" element={<ResumeBuilder />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/*" element={<_404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import DM from "./pages/DM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DM />} />
        <Route path="/DM" element={<DM />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

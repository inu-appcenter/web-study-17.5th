import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tving from "./pages/Tving";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tving />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Loginpages from "./pages/Login";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginpages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

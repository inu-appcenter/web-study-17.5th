import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";

export default function App() {
  return (
    <div className="min-h-full pb-0">
      <Header />
      <main className="container-app py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

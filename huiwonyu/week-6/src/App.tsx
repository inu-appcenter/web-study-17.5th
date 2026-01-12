import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PlaceListPage from "./pages/PlaceListPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import type { JSX } from "react";

function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}

function ProtectedRoute({ children }: { children: JSX.Element }) {
  if (!isLoggedIn()) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/places"
          element={
            <ProtectedRoute>
              <PlaceListPage />
            </ProtectedRoute>
          }
        />
        <Route path="/places/:id" element={<PlaceDetailPage />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

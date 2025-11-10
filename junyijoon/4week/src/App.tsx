import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

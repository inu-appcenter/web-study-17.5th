import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import FindStarPage from "./FindStarPage";
function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/main"} element={<MainPage />} />
        <Route path={"/star"} element={<FindStarPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;

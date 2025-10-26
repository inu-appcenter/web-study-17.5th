import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainTodoPage from './pages/MainTodoPage';
import { Context } from './Context.tsx';
import { useState } from 'react';
import Completed from './pages/CompletedPage';
import Setting from './pages/SettingPage';
function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) return savedMode;
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  });
  const toggleMode = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  return (
    <Context.Provider value={{ mode, toggleMode }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainTodoPage />} />
          <Route path={'/completed'} element={<Completed />}></Route>
          <Route path={'/setting'} element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

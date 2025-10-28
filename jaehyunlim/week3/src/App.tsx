import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/TodoContext';
import Home from './pages/Home';
import Done from './pages/Done';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/done" element={<Done />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;

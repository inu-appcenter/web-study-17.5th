import './global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DmPage from './pages/DmPage';
import CompassPage from './pages/CompassPage';
import NoticePage from './pages/NoticePage';
import ReelsPage from './pages/ReelsPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dm" element={<DmPage />} />
        <Route path="/compass" element={<CompassPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App

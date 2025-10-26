import { useState, useEffect, useContext } from 'react';
import '../App.css';
import { Context } from '../Context.tsx';
import { useNavigate } from 'react-router-dom';

function SettingPage() {
  const { mode, toggleMode } = useContext(Context);
  let navigate = useNavigate();
  const [selected, setSelected] = useState('1');
  const exit = () => {
    navigate('/');
  };
  useEffect(() => {
    localStorage.setItem('setting', selected);
    if (selected === '1') toggleMode();
    else if (selected === '2') toggleMode();
  }, [selected, toggleMode]);
  return (
    <div className={mode === 'light' ? 'box light-mode' : 'box dark-mode'}>
      <header>
        <h1 className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
          모드 설정 : 라이트 모드/다크 모드
        </h1>
      </header>
      <main className="line">
        <h2>기본</h2>
        <input
          type="radio"
          id="default"
          name="option"
          value="1"
          onChange={(e) => setSelected(e.target.value)}
          checked={selected === '1'}
        />
        <h2>모드 변경</h2>
        <input
          type="radio"
          id="light"
          name="option"
          value="2"
          onChange={(e) => setSelected(e.target.value)}
          checked={selected === '2'}
        />
      </main>
      <button
        className={mode === 'light' ? 'light-mode' : 'dark-mode'}
        onClick={exit}
      >
        X
      </button>
    </div>
  );
}

export default SettingPage;

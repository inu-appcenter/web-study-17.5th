import { useState, useEffect, useContext } from 'react';
import '../App.css';
import Card, { type CardProps } from '../component/Card.tsx';
import { Context } from '../Context.tsx';
import { useNavigate } from 'react-router-dom';

function CompletedPage() {
  const { mode } = useContext(Context);
  const [card, setCard] = useState<CardProps[]>([]);
  let navigate = useNavigate();

  const warper = () => {
    navigate('/');
  };
  const option = () => {
    navigate('/setting');
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('card') || '[]');
    setCard(saved);
  }, []);

  return (
    <div className={mode === 'light' ? 'box light-mode' : 'box dark-mode'}>
      <header>
        <h1 className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
          TodoList
        </h1>
      </header>
      <main>
        <div className={mode === 'light' ? 'light-mode ' : 'dark-mode '}>
          <div
            className={
              mode === 'light'
                ? 'light-mode input-and-button'
                : 'dark-mode input-and-button'
            }
          ></div>
          {card
            .filter((c) => c.check)
            .map((c, index) => (
              <Card key={index} text={c.text} check={c.check} />
            ))}
        </div>
      </main>
      <footer
        className={mode === 'light' ? 'light-mode footer' : 'dark-mode footer'}
      >
        <h4>남은 할 일이 {card.filter((c) => !c.check).length}개에요!</h4>
        <button
          className={mode === 'light' ? 'light-mode' : 'dark-mode'}
          onClick={warper}
        >
          전부
        </button>
        <button
          className={mode === 'light' ? 'light-mode' : 'dark-mode'}
          onClick={option}
        >
          설정
        </button>
      </footer>
    </div>
  );
}

export default CompletedPage;

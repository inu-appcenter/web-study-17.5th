import { useState, useEffect, useContext } from 'react';
import '../App.css';
import Card, { type CardProps } from '../component/Card.tsx';
import { Context } from '../Context.tsx';
import { useNavigate } from 'react-router-dom';

function MainTodoPage() {
  const { mode } = useContext(Context);
  const [card, setCard] = useState<CardProps[]>([]);
  const [text, setText] = useState('');
  let navigate = useNavigate();

  const addCard = () => {
    if (!text.trim()) {
      alert('할 일을 입력해주세요');
      return;
    }
    const newCard = [...card, { text, check: false }];
    setCard(newCard);
    localStorage.setItem('card', JSON.stringify(newCard));
    setText('');
  };

  const deleter = () => {
    const newCards = card.filter((c) => !c.check);
    localStorage.setItem('card', JSON.stringify(newCards));
    setCard(newCards);
  };

  const checker = (index: number) => {
    const newCards = [...card];
    newCards[index] = { ...newCards[index], check: !newCards[index].check };
    setCard(newCards);
    localStorage.setItem('card', JSON.stringify(newCards));
  };
  const warper = () => {
    navigate('/completed');
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
          >
            <input
              placeholder="오늘의 할일"
              className={
                mode === 'light'
                  ? 'light-mode input-text'
                  : 'dark-mode input-text'
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className={mode === 'light' ? 'light-mode' : 'dark-mode'}
              onClick={addCard}
            >
              추가하기
            </button>
          </div>
          {card.map((c, index) => (
            <Card
              key={index}
              text={c.text}
              check={c.check}
              onChange={() => checker(index)}
            />
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
          끝난거
        </button>
        <button
          className={mode === 'light' ? 'light-mode' : 'dark-mode'}
          onClick={deleter}
        >
          삭제
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

export default MainTodoPage;

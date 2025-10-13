import { useState ,useEffect} from 'react'
import './App.css'
import Card, { type CardProps } from './component/Card.tsx'

function App() {
      const [card, setCard] = useState<CardProps[]>([]);
      const [text, setText] = useState("");
    
      const addCard = () => {
      if (!text.trim()) {
        alert("할 일을 입력해주세요");
        return;
      }
      const newCard = [...card, { text, check: false }];
      setCard(newCard);
      localStorage.setItem("card", JSON.stringify(newCard));
      setText("");
    }
    
    const deleter = () => {
      const newCards = card.filter(c => !c.check);
      localStorage.setItem("card", JSON.stringify(newCards));
      setCard(newCards);
    }

    const checker = (index: number) => {
    const newCards = [...card];
    newCards[index] = { ...newCards[index], check: !newCards[index].check };
    setCard(newCards);
    localStorage.setItem("card", JSON.stringify(newCards));
  };

    useEffect(()=>{
     const saved = JSON.parse(localStorage.getItem("card") || "[]" );
     setCard(saved);
    },[]
    );


  return (
    <>
    <div className='box'>
      <header>
        <h1>TodoList</h1>
      </header>
      <main className=''>
        <div className='sub-background'>
          <div className='input-and-button'>
            <input 
            placeholder='오늘의 할일' 
            className='input-text' 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
            <button onClick={addCard}>추가하기</button>
          </div>
            {card.map((c, index) => (
              <Card 
                key={index} 
                text={c.text} 
                check={c.check} 
                onChange={() => checker(index)} />
            ))}
        </div>
      </main>
      <footer className='footer'>
        <h4>남은 할 일이 {card.filter(c => !c.check).length}개에요!</h4>
        <button onClick={deleter}>삭제</button>
      </footer>
    </div>
    </>
  )
}

export default App

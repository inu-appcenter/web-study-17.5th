import { useState } from 'react'
import "./App.css"

export default function App() {
  const [flip, setFlip] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // 마우스호버링할때 움직이는 애니메이션
  const onMouseMove = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateY = (x / rect.width - 0.5) * 15
    const rotateX = -(y / rect.height - 0.5) * 15
    setRotation({ x: rotateX, y: rotateY })
  }

  const onMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div className="container">
      <div className="card"
        onClick={() => setFlip(prev => !prev)} // 클릭 시 명함 뒤집기
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y + (flip ? 180 : 0)}deg)
          `,
        }}
      >
        {/* 앞면 */}
        <div className="front">
          <div>
            <h1>이성빈</h1>
            <h5>FrontEnd</h5>
            <div className="font-container">
              <p className="accent-font">T.</p>
              <p>010-6542-5838</p>
            </div>
            <div className="font-container">
              <p className="accent-font">E.</p>
              <p>optshj@gmail.com</p>
            </div>
          </div>
          <div className="front-right"> 
            <h1>AppCenter 17.5th</h1>
          </div>
        </div>

        {/* 뒷면 */}
        <div className="back">
          <h1>AppCenter 17.5th</h1>
          <p>FrontEnd</p>
        </div>
      </div>
    </div>
  )
}

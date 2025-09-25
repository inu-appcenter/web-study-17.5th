import React from "react";
import "./App.css";
import mail from "./assets/mail.png";
import github from "./assets/github.png";
import velog from "./assets/velog.png";

function App() {
  return (
    <div className="card">
      {/* 1. 로고 영역 */}
      <div className="logo">
        <h1>HUIWON</h1>
        <p>INCHEON UNIVERSITY</p>
      </div>

      {/* 2. 직책 */}
      <div className="position">개발자</div>

      {/* 3. 이름 */}
      <div className="name">유 희 원 Yu Hui Won</div>

      {/* 4. 하단 정보 */}
      <div className="footer">
        <div className="left">
          <p>서울특별시 서대문구</p>

          {/* 전화번호, 이메일 */}
          <div className="contact-item">
            <span>010-8560-4428</span>
            <img src={mail} alt="메일 로고" className="icon" />
            <span>heuiwon716@gmail.com</span>
          </div>

          {/* 깃허브, 벨로그 */}
          <div className="contact-item">
            <img src={github} alt="깃허브 로고" className="icon" />
            <span>Dead-or-Alive0609</span>
            <img src={velog} alt="벨로그 로고" className="icon" />
            <span>https://velog.io/@hi_1/posts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

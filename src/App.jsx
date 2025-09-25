import React from "react";
import "./App.css";
import mail from "./assets/mail.png";
import github from "./assets/github.png";
import velog from "./assets/velog.png";

function App() {
  return (
    <div className="card">
      {/* 로고 */}
      <div className="logo">
        <h1>HUIWON</h1>
        <p>INCHEON UNIVERSITY</p>
      </div>

      {/* 직책 */}
      <div className="position">개발자</div>

      {/* 이름 */}
      <div className="name">유 희 원 Yu Hui Won</div>

      {/* 주소 */}
      <p className="address">서울특별시 서대문구</p>

      {/* 연락처/링크 */}
      <div className="contacts">
        <div className="contact-item">
          <span>010-8560-4428</span>
        </div>
        <div className="contact-item">
          <img src={mail} alt="메일" className="icon" />
          <span>heuiwon716@gmail.com</span>
        </div>
        <div className="contact-item">
          <img src={github} alt="깃허브" className="icon" />
          <span>Dead-or-Alive0609</span>
        </div>
        <div className="contact-item">
          <img src={velog} alt="벨로그" className="icon" />
          <span>https://velog.io/@hi_1/posts</span>
        </div>
      </div>
    </div>
  );
}

export default App;

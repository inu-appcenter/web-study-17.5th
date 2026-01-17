import "../css/main.css";
// import { TEXT } from "../constants/text";
import Header from "../component/Header";
import cloud from "../assets/cloud.svg";
import eye from "../assets/eye.svg";
import rain from "../assets/rain.svg";
import wind from "../assets/wind.svg";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <header>
        <Header />
      </header>
      <main className="midset">
        <h3 className="midset">별자리 관측의 모든 것</h3>
        <h1 className="midset">
          밤하늘의 아름다운 별자리를 관찰하고 기록하세요
        </h1>
        <div onClick={() => navigate("/star")} className="midset cursor">
          <h1 className="movePage">관측 시작하기 →</h1>
        </div>
        <h2 className="midset maintext">
          별자리 관측소는 여러분의 천체 관측 경험을 더욱 풍부하게 만들어
          드립니다
        </h2>
        <div className="midset dataBox">
          <span className="midset dataBox">
            <div className="dataFrame">
              <img src={cloud} />
              <div className="dataTitle">구름정보</div>
              <div className="detailText">
                실시간 운량 데이터를 별 관측 가능 여부를 확인하세요
              </div>
            </div>
            <span className="dataFrame">
              <img src={wind} />
              <div className="dataTitle">황사정보</div>
              <div className="detailText">
                미세먼지와 황사 농도로 하늘의 밝기를 측정합니다
              </div>
            </span>
          </span>
          <span className="midset dataBox">
            <span className="dataFrame">
              <img src={eye} />
              <div className="dataTitle">시정정보</div>
              <div className="detailText">
                대기 시정거리를 통해 관측 조건을 평가합니다
              </div>
            </span>
            <span className="dataFrame">
              <img src={rain} />
              <div className="dataTitle">강수정보</div>
              <div className="detailText">
                강수 확률과 강수량으로 관측 일정을 계획하세요
              </div>
            </span>
          </span>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;

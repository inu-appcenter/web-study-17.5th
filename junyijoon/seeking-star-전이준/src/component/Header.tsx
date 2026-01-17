import "../css/main.css";
import { TEXT } from "../constants/text";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <span onClick={() => navigate("/")} className="inline cursor">
        <div className="logoframe">
          <img src={logo} alt="로고 이미지" />
        </div>
        <h1>{TEXT.LOGO}</h1>
      </span>
      <span className="inline">
        <div onClick={() => navigate("/")}>
          <h1 className="movePage cursor">{TEXT.MAIN}</h1>
        </div>
        <div className="space" />
        <div onClick={() => navigate("/star")}>
          <h1 className="movePage cursor">{TEXT.FIND}</h1>
        </div>
      </span>
    </>
  );
}

export default Header;

import emoticonshop from "../assets/kakaotalkemoticonshop.png";
import sidemenu from "../assets/side_menu.png";
import finder from "../assets/finder.png";
import profile from "../assets/smallprofile.png";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const mainClick = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="topheader">
        <button className="buttonimgbg" id="side_menu">
          <img className="buttonimg" src={sidemenu}></img>
        </button>
        <h1 className="mainimgbg" id="homeimg" onClick={mainClick}>
          <img className="mainimg" src={emoticonshop}></img>
        </h1>
        <button className="buttonimgbg" id="finder" onClick={mainClick}>
          <img className="buttonimg" src={finder}></img>
        </button>
        <div className="profilebg" id="prfile">
          <img className="profile" src={profile}></img>
        </div>
      </div>
      <nav className="bottomheader">
        <ul>
          <li className="textbg selected">
            <a href="http://localhost:5173/" className="text selected">
              홈
            </a>
          </li>
          <li className="textbg">
            <a href="http://localhost:5173/" className="text">
              신규
            </a>
          </li>
          <li className="textbg">
            <a href="http://localhost:5173/" className="text">
              인기
            </a>
          </li>
          <li className="textbg">
            <a href="http://localhost:5173/" className="text">
              스타일
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
